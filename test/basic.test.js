import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
test("prints help", () => assert.match(execFileSync(process.execPath, ["bin/ship-check.js", "--help"], { encoding: "utf8" }), /Usage/));