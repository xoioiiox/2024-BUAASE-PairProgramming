export function mancalaResult(flag: i32, seq: Array<i32>, size: i32): i32 {
  var count = new Array<i32>(15) // 1-6为选手1的洞，7为选手1的计分池；8-13为选手2的洞，14为选手2的计分池
  var curHole = 0, curHoleNum = 0, distriHole = 0
  for (let i = 1; i <= 14; i++) {
    if (i == 7 || i == 14) {
      continue;
    }
    count[i] = 4;
  }
  var expectCurTurn = flag; // 当前待操作的选手
  var curTurn = 0; // 实际操作的选手
  for (let i = 0; i < size; i++) {
    curTurn = seq[i] / 10;
    if (curTurn != expectCurTurn) { // 顺序有误
      return 30000 + i;
    }
    else {
      curHole = seq[i] % 10 + (flag - 1) * 7;
      curHoleNum = count[curHole];
      count[curHole] = 0;
      for (let j = 0; j < curHoleNum; j++) {
        distriHole = (curHole + j) % 14 + 1;
        // 若播到对方的计分池，需要跳过
        if (distriHole == 14 && curTurn == 1 || distriHole == 7 && curTurn == 2) { 
          distriHole = distriHole % 14 + 1;
        }
        else {
          count[distriHole]++;
        }
      }
      // 判断最后一颗棋子的位置，指定下一轮操作方
      if (distriHole == 7 && curTurn == 1 || distriHole == 14 && curTurn == 2) { // 落入己方计分池
        expectCurTurn = curTurn;
      }
      else if (distriHole >= 1 + (curTurn - 1) * 7 && distriHole <= 6 + (curTurn - 1) * 7 
        && count[distriHole] == 1 && count[14 - distriHole] > 0) { // 落入己方无棋子洞
        count[7 * curTurn] += count[distriHole] + count[14 - distriHole];
        count[distriHole] = 0;
        count[14 - distriHole] = 0;
        expectCurTurn = 3 - curTurn;
      }
      else {
        expectCurTurn = 3 - curTurn;
      }
    }
  }
  // 统计选手1和选手2当前洞内所有棋子
  var surplus1 = 0, surplus2 = 0;
  for (let i = 1; i <= 6; i++) {
    surplus1 += count[i];
  }
  for (let i = 8; i <= 13; i++) {
    surplus2 += count[i];
  }
  if (surplus1 == 0) {
    count[14] += surplus2;
    return 15000 + count[7 * flag] - count[7 * (3 - flag)];
  }
  else if (surplus2 == 0) {
    count[7] += surplus1;
    return 15000 + count[7 * flag] - count[7 * (3 - flag)];
  }
  else {
    return 20000 + count[7 * flag];
  }
}
