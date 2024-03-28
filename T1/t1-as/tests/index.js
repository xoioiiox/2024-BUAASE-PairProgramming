import assert from "assert";
import { bocchiShutUp } from "../build/debug.js";
assert.strictEqual(bocchiShutUp(1,[13,14,15,21,11,16],6),10);
assert.strictEqual(bocchiShutUp(2,[13,14,15,21,11,26],6),10);
assert.strictEqual(bocchiShutUp(1,[13,13,15,21,11,16],6),13);
assert.strictEqual(bocchiShutUp(2,[13,14,15,21,11,16],6),21);
assert.strictEqual(bocchiShutUp(1,[13,14,15,21,11,16,21,21],8),10);
console.log("ok");
