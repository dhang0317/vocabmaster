# Context Engine Seed (630 words)

## Files
- `context-engine-seed-1000.js` — seed script (34 slots + 280+ grammar patterns)
- `context_engine_1000.json` — placeholder (full JSON is large; use local copy or zip)

## How to seed

1. Place the full `context_engine_1000.json` (from project artifacts or download) next to the seed script in `prisma/`.
2. Ensure `DATABASE_URL` is set (Neon).
3. Run:

```bash
node prisma/context-engine-seed-1000.js
```

Expected output roughly:
```
Loaded 630 words from ...
Context Engine seeded: 34 slots, ~280 patterns, 630 words, 630 senses, ~630 examples, ~630 slot candidates, ~630 context sentences.
```

## Current stats (630 unique)
- Domain: workplace 146 · academic 119 · daily 123 · science 135 · travel 107
- POS: verb 223 · noun 283 · adj 124
- CEFR: A1 11 · A2 67 · B1 254 · B2 273 · C1 25

## Next
Still ~370 words short of full 1,000. Continue expansion after verification.
