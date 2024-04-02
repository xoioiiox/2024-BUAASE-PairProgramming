import assert from "assert";
import { mancalaResult } from "../build/debug.js";
//assert.strictEqual(mancalaResult(1, 2), 3);
// 测试用例 1: 
assert.strictEqual(mancalaResult(1, [13,16,26,12,16,11,22,25,13,16,15,21,16,14,25,22,16,15,24,16,14,23,15,21,16,14,24,12,26,13,16,15,16,14,16,15,25,16,11,26], 40), 15024)
console.log("ok");
