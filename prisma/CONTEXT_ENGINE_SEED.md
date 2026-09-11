# Context Engine Seed (630 words)

## Files on GitHub
- `context-engine-seed-1000.js` — seed script (supports split parts)
- `context_engine_1000.json` — meta + parts list
- `context_engine_1000_part1/2/3.json` — word data (upload from project artifacts if missing)

## Why split?
The full 630-word JSON is ~300 KB. Data is split into 3 parts for reliable push.

## How to get the full word data

**From project artifacts (easiest)**  
Download these files and put them into your local `prisma/` folder:

- `context_engine_1000.json` (full single file, recommended)
- or the three parts: `context_engine_1000_part1.json`, `part2.json`, `part3.json`

Then the seed will auto-load them.

## Run the seed

```bash
# Make sure DATABASE_URL is set (Neon)
node prisma/context-engine-seed-1000.js
```

Expected output:
```
  + loaded 210 words from context_engine_1000_part1.json
  + loaded 210 words from context_engine_1000_part2.json
  + loaded 210 words from context_engine_1000_part3.json
Loaded 630 words from ...
Context Engine seeded: 34 slots, ~280 patterns, 630 words, 630 senses, ~630 examples, ~630 slot candidates, ~630 context sentences.
```

## Stats (630 unique)
- Domain: workplace 146 · academic 119 · daily 123 · science 135 · travel 107
- POS: verb 223 · noun 283 · adj 124
- CEFR: A1 11 · A2 67 · B1 254 · B2 273 · C1 25

Still ~370 words short of 1,000. After you verify the seed works, we can continue expansion.
