import assert from "assert";
import { bocchiShutUp } from "../build/debug.js";

// 测试用例
function runTest(name, callback) {
  try {
    callback();
    console.log(`Test ${name} passed`);
  } catch (error) {
    console.error(`Test ${name} failed:${error.message}`);
  }
}

// 测试用例 1: 十位数为 1 且只有一个最高频次的数字
runTest('should return the most frequent digit when flag is 1 and there is only one max frequency', () => {
  const result = bocchiShutUp(1, new Int32Array([11, 11, 12, 13, 14, 15, 16, 11]), 8);
  assert.strictEqual(result, 11); // 期望结果是 11，因为 11 出现了最多次
});

// 测试用例 2: 十位数为 2 且只有一个最高频次的数字
runTest('should return the most frequent digit when flag is 2 and there is only one max frequency', () => {
  const result = bocchiShutUp(2, new Int32Array([21, 22, 23, 24, 25, 26, 21, 21]), 8);
  assert.strictEqual(result, 21); // 期望结果是 21，因为 21 出现了最多次
});

// 测试用例 3: 十位数为 1 和 2，但都没有最高频次的数字
runTest('should return 10 when there are multiple max frequencies', () => {
  const result = bocchiShutUp(1, new Int32Array([11, 12, 12, 14, 15, 16, 11]), 7);
  assert.strictEqual(result, 10); // 期望结果是 10，因为 11 和 12 都出现了最多次
});

