import assert from "assert";
import { mancalaOperator } from "../build/debug.js";
// assert.strictEqual(add(1, 2), 3);
// console.log("ok");

//按从高到低优先级排序：
//对方是否有取子可能，若有可能，则将可能被取子的己方棋洞中的棋子播撒
//己方是否有取子可能，若有可能，则选择可能能够取子的棋洞
//己方是否有可能将最后一颗棋子落入计分洞，若有可能，则选择该棋洞
//己方是否有可能让最右侧（即最靠近己方计分洞）的棋洞保持为空
//若以上均不可能，则选择能够让尽可能多的棋子留在己方的棋洞

// 测试用例
function runTest(name, callback) {
  try {
    callback();
    console.log(`Test ${name} passed`);
  } catch (error) {
    console.error(`Test ${name} failed:${error.message}`);
  }
}

// 测试用例 1: 己方有取子可能，选择可能能够取子的棋洞
runTest('test1', () => {
  const result = mancalaOperator(2, new Int32Array([5,5,1,6,4,1,2,8,0,3,6,5,0,2]));
  assert.strictEqual(result, 23);
});


// 测试用例 2: 对方有取子可能，若有可能，将可能被取子的己方棋洞中的棋子播撒
runTest('test2', () => {
  const result = mancalaOperator(2, new Int32Array([5,5,1,6,5,0,2,5,0,6,6,5,0,2]),);
  assert.strictEqual(result, 21);
});

// 测试用例 3: 己方有可能将最后一颗棋子落入计分洞
runTest('test3', () => {
  const result = mancalaOperator(1, new Int32Array([4,4,4,4,4,4,0,4,4,4,4,4,4,0]), );
  assert.strictEqual(result, 13);
});

// 测试用例 4: 己方有可能让最右侧（即最靠近己方计分洞）的棋洞保持为空
runTest('test4', () => {
  const result = mancalaOperator(1, new Int32Array([4,4,0,5,5,5,1,4,4,4,4,4,4,0]), );
  assert.strictEqual(result, 16);
});


