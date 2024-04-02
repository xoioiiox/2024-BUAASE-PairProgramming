import assert from "assert";
import { mancalaOperator } from "../build/debug.js";
assert.strictEqual(mancalaOperator(1, [5,5,1,6,5,0,2,5,0,6,6,5,0,2,1]), 11);
console.log("ok");
