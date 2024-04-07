import assert from "assert";
import { mancalaResult } from "../build/debug.js";
<<<<<<< HEAD
// 测试用例 1: 
assert.strictEqual(mancalaResult(1, [13,16,26,12,16,11,22,25,13,16,15,21,16,14,25,22,16,15,24,16,14,23,15,21,16,14,24,12,26,13,16,15,16,14,16,15,25,16,11,26], 40), 15024)
assert.strictEqual(mancalaResult(1, [11, 22, 13, 24, 15, 26, 16, 21, 14, 23, 15], 11), 20005);
console.log("ok");
=======
// assert.strictEqual(add(1, 2), 3);
// console.log("ok");


// 测试用例
function runTest(name, callback) {
  try {
    callback();
    console.log(`Test ${name} passed`);
  } catch (error) {
    console.error(`Test ${name} failed:${error.message}`);
  }
}

// 测试用例 1: 1作为先手，局内有多次取子和再次行动，共40步操作，最终1获胜，净胜24分，返回150024
runTest('should return 15024', () => {
  const result = mancalaResult(1, new Int32Array([13,16,26,12,16,11,22,25,13,16,15,21,16,14,25,22,16,15,24,16,14,23,15,21,16,14,24,12,26,13,16,15,16,14,16,15,25,16,11,26]), 40);
  assert.strictEqual(result, 15024);
});

//13,16,26,12,16,11,22,25,13,16,15,21,16,14,25,22,16,15,24,16,14,23,15,21,16,14,24,12,26,13,16,15,16,14,16,15,25,16,11,26


// 测试用例 2: 
runTest('should return 30000', () => {
  const result = mancalaResult(2, new Int32Array([11, 22, 13, 24, 25, 26, 16, 21, 14, 23]), 10);
  assert.strictEqual(result, 30000);
});

// 测试用例 3: 
runTest('should return 20005', () => {
  const result = mancalaResult(1, new Int32Array([11, 22, 13, 24, 15, 26, 16, 21, 14, 23, 15]), 11);
  assert.strictEqual(result, 20005);
});

// 测试用例 4: 
runTest('should return 20002', () => {
  const result = mancalaResult(1, new Int32Array([11, 22, 13, 24, 15]), 5);
  assert.strictEqual(result, 20002);
});


>>>>>>> 8dbfd101e76404f186dc0b9ebfc6c57b0a0312ab
