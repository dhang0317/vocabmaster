import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { RawWordInput } from '@/types';

const POS_PATTERN = /^(?:n|v|vt|vi|adj|adv|prep|pron|conj|det|art|aux|modal|interj|phr|phrase|num|abbr|gerund|名詞|動詞|形容詞|副詞|介系詞|代名詞|連接詞|片語)\.?$/i;

function isPosValue(value: string): boolean {
  return value
    .split(/\s*\/\s*|\s*,\s*|\s*、\s*/)
    .every(part => POS_PATTERN.test(part.trim()));
}

function splitVocabularyLine(line: string): string[] {
  // Support the common format: "Acquire (v.) 收購、取得" or "Acquire(v.)收購、取得".
  const parenthesizedPos = line.match(
    /^([A-Za-z][A-Za-z'/-]*)\s*\(\s*([^)]*?)\s*\)\s*([\u3400-\u9fff].+)$/i,
  );
  if (parenthesizedPos && isPosValue(parenthesizedPos[2].trim())) {
    return [parenthesizedPos[1].trim(), parenthesizedPos[2].trim(), parenthesizedPos[3].trim()];
  }

  // Support tabs, CSV-style commas, common punctuation, and runs of spaces.
  const separator = /\t+|\s*(?:,|，|;|；|\||｜|:|：|→|–|—|-)\s*|\s{2,}/;
  const parts = line.split(separator).map(part => part.trim()).filter(Boolean);

  if (parts.length >= 3) return parts;

  // Support compact entries with no space around the part of speech:
  // "apple n.蘋果" and "applen.蘋果".
  const compactPos = line.match(
    /^([A-Za-z][A-Za-z'/-]*?)\s*(n|v|vt|vi|adj|adv|prep|pron|conj|det|art|aux|modal|interj|phr|phrase|num|abbr|名詞|動詞|形容詞|副詞|介系詞|代名詞|連接詞|片語)\.?\s*([\u3400-\u9fff].+)$/i,
  );
  if (compactPos) return [compactPos[1].trim(), `${compactPos[2]}.`, compactPos[3].trim()];

  // Also support compact input such as: "apple n. 蘋果".
  const compact = line.match(/^([A-Za-z][A-Za-z\s'/-]*?)\s+([A-Za-z]{1,12}\.?|名詞|動詞|形容詞|副詞)\s+(.+)$/i);
  if (compact) return [compact[1].trim(), compact[2].trim(), compact[3].trim()];

  // Support an English word immediately followed by Chinese text.
  const englishChinese = line.match(/^([A-Za-z][A-Za-z\s'/-]*?)([\u3400-\u9fff].*)$/);
  if (englishChinese) return [englishChinese[1].trim(), englishChinese[2].trim()];

  return parts.length > 0 ? parts : [line.trim()];
}

/** Parses one vocabulary entry per line as: English, part of speech, Chinese. */
export function parseRawText(text: string): RawWordInput[] {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const words: RawWordInput[] = [];

  for (const line of lines) {
    const parts = splitVocabularyLine(line);

    const word = parts[0]?.trim();
    if (word) {
      const second = parts[1]?.trim() || '';
      const third = parts.slice(2).join(' ').trim();
      const looksLikePos = POS_PATTERN.test(second);
      words.push({
        word,
        translation: looksLikePos ? third : second,
        pos: looksLikePos ? second : (POS_PATTERN.test(third) ? third : ''),
        example: parts.slice(3).join(' ').trim(),
      });
    }
  }

  return words;
}

/**
 * Parses CSV file text using PapaParse with smart column mapping
 */
export function parseCSV(csvText: string): Promise<RawWordInput[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data && results.data.length > 0) {
          const rows = results.data as Record<string, string>[];
          const words: RawWordInput[] = [];

          for (const row of rows) {
            // Find key names dynamically
            const keys = Object.keys(row);
            const wordKey = keys.find(k => /word|單字|vocabulary|term/i.test(k)) || keys[0];
            const transKey = keys.find(k => /trans|中文|翻譯|meaning|definition/i.test(k)) || keys[1];
            const posKey = keys.find(k => /pos|詞性|part of speech/i.test(k));
            const exampleKey = keys.find(k => /example|例句|sentence/i.test(k));

            const word = row[wordKey]?.trim();
            if (word) {
              words.push({
                word,
                translation: transKey && row[transKey] ? row[transKey].trim() : '',
                pos: posKey && row[posKey] ? row[posKey].trim() : '',
                example: exampleKey && row[exampleKey] ? row[exampleKey].trim() : '',
              });
            }
          }
          resolve(words);
        } else {
          // If no headers or single column
          const raw = parseRawText(csvText);
          resolve(raw);
        }
      },
      error: (err: any) => reject(err),
    });
  });
}

/**
 * Parses Excel file buffer (.xlsx / .xls)
 */
export function parseExcel(buffer: ArrayBuffer): RawWordInput[] {
  const workbook = XLSX.read(buffer, { type: 'array' });
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const jsonData = XLSX.utils.sheet_to_json<Record<string, any>>(worksheet, { header: 1 });

  if (!jsonData || jsonData.length === 0) return [];

  const words: RawWordInput[] = [];
  
  // Check if row 0 is header
  const firstRow = jsonData[0] as string[];
  const hasHeader = firstRow && firstRow.some(col => typeof col === 'string' && /word|單字|vocab/i.test(col));
  const startIndex = hasHeader ? 1 : 0;

  for (let i = startIndex; i < jsonData.length; i++) {
    const row = jsonData[i] as any[];
    if (row && row.length > 0 && row[0]) {
      const word = String(row[0]).trim();
      if (word) {
        words.push({
          word,
          translation: row[1] ? String(row[1]).trim() : '',
          pos: row[2] ? String(row[2]).trim() : '',
          example: row[3] ? String(row[3]).trim() : '',
        });
      }
    }
  }

  return words;
}
