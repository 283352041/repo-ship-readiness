# Repo Ship Readiness

A tiny CLI that scores whether a repository is ready to publish.

```bash
node ./bin/ship-check.js
node ./bin/ship-check.js --json
```

Checks README, license, package metadata, gitignore, CI, examples, and tests.

## Scoring Notes

A score below 80 usually means the repo needs more context before sharing publicly. The check is intentionally simple and transparent.
