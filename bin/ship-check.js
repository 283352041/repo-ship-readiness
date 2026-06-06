#!/usr/bin/env node
import fs from "node:fs";
const checks = [
  ["README", () => fs.existsSync("README.md")],
  ["LICENSE", () => fs.existsSync("LICENSE") || fs.existsSync("LICENSE.md")],
  ["package metadata", () => fs.existsSync("package.json")],
  ["gitignore", () => fs.existsSync(".gitignore")],
  ["CI workflow", () => fs.existsSync(".github/workflows/ci.yml")],
  ["examples", () => fs.existsSync("examples") || fs.existsSync("demo")],
  ["tests", () => fs.existsSync("test") || fs.existsSync("tests")]
];
if (process.argv.includes("--help")) { console.log("Usage: ship-check [--json]"); process.exit(0); }
const results = checks.map(([name, fn]) => ({ name, pass: Boolean(fn()) }));
const score = Math.round(results.filter(r => r.pass).length / results.length * 100);
if (process.argv.includes("--json")) console.log(JSON.stringify({ score, results }, null, 2));
else { console.log(`Ship readiness: ${score}%`); for (const r of results) console.log(`${r.pass ? "OK" : "MISS"} ${r.name}`); }
process.exitCode = score >= 80 ? 0 : 1;
