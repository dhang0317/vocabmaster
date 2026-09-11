-- Context Engine Production hardening
-- Run AFTER Prisma schema migration.

CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX IF NOT EXISTS sentence_content_trgm_idx
  ON "Sentence" USING gin ("content" gin_trgm_ops);

CREATE INDEX IF NOT EXISTS sentence_target_lookup_idx
  ON "SentenceWord" ("wordId", "isTarget", "sentenceId");

CREATE INDEX IF NOT EXISTS sense_context_lookup_idx
  ON "Sense" ("wordId", "cefr", "domain", "register");

CREATE INDEX IF NOT EXISTS slot_candidate_rank_idx
  ON "SlotCandidate" ("slotId", "priority" DESC, "weight" DESC);

CREATE INDEX IF NOT EXISTS template_context_rank_idx
  ON "Template" ("theme", "difficulty", "qualityScore" DESC);

CREATE INDEX IF NOT EXISTS sentence_context_rank_idx
  ON "Sentence" ("theme", "difficulty", "qualityScore" DESC, "createdAt" DESC);

CREATE INDEX IF NOT EXISTS article_context_rank_idx
  ON "Article" ("theme", "difficulty", "qualityScore" DESC);

-- Prevent exact duplicate production sentences when a normalized key is available.
ALTER TABLE "Sentence"
  ADD COLUMN IF NOT EXISTS "normalizedKey" TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS sentence_normalized_key_unique_idx
  ON "Sentence" ("normalizedKey")
  WHERE "normalizedKey" IS NOT NULL;

-- Optional quality dimensions. Kept nullable so existing corpus remains compatible.
ALTER TABLE "Sentence"
  ADD COLUMN IF NOT EXISTS "grammarScore" DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS "naturalnessScore" DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS "meaningScore" DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS "contextScore" DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS "cefrScore" DOUBLE PRECISION,
  ADD COLUMN IF NOT EXISTS "diversityScore" DOUBLE PRECISION;

CREATE INDEX IF NOT EXISTS sentence_quality_filter_idx
  ON "Sentence" ("qualityScore" DESC, "contextScore" DESC, "naturalnessScore" DESC);
