import assert from "assert";
import { mancalaBoard } from "../build/debug.js";
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

// 测试用例 1: 2最后操作，所有操作合法，游戏结束，数据位224，
runTest('test1', () => {
  const result = mancalaBoard(1, new Int32Array([13,16,26,12,16,11,22,25,13,16,15,21,16,14,25,22,16,15,24,16,14,23,15,21,16,14,24,12,26,13,16,15,16,14,16,15,25,16,11,26]), 40);
  assert.deepStrictEqual(result, [0,0,0,0,0,0,36,0,0,0,0,0,0,12,224]);
});


// 测试用例 2: 不合法操作
runTest('test2', () => {
  const result = mancalaBoard(2, new Int32Array([11, 22, 13, 24, 25, 26, 16, 21, 14, 23]), 10);
  assert.deepStrictEqual(result, [4,9,3,1,8,1,3,1,3,0,4,4,2,5,1]);
});

// 测试用例 3: 
runTest('test3', () => {
  const result = mancalaBoard(1, new Int32Array([11, 22, 13, 24, 15, 26, 16, 21, 14, 23, 15]), 11);
  assert.deepStrictEqual(result, [4,8,2,1,0,2,5,2,4,0,5,9,2,4,2]);
});

// 测试用例 4: 
runTest('test4', () => {
  const result = mancalaBoard(1, new Int32Array([11, 22, 13, 24, 15]), 5);
  assert.deepStrictEqual(result, [1,6,0,6,0,6,2,6,1,6,1,6,6,1,2]);
});

