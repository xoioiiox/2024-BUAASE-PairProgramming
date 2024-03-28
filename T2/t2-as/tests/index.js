import assert from "assert";
import { mancalaResult } from "../build/debug.js";
assert.strictEqual(mancalaResult(1, 2), 3);
console.log("ok");
