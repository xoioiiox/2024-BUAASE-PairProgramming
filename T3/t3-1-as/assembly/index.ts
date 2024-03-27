export function mancalaBoard(flag: i32, seq: Array<i32>, size: i32): Array<i32> {
  var board = new Array<i32>(15);
  var count = new Array<i32>(15)
  var curHole = 0, curHoleNum = 0, distriHole = 0
  for (let i = 1; i <= 14; i++) {
    if (i == 7 || i == 14) {
      continue;
    }
    count[i] = 4;
  }
  var expectCurTurn = flag; // 当前待操作的选手
  var curTurn = 0; // 实际操作的选手
  var isIllegal = 0; // 是否出现了违规行为
  for (let i = 0; i < size; i++) {
    curTurn = seq[i] / 10;
    if (i == size - 1 && curTurn != expectCurTurn) { // 顺序有误
      isIllegal = 1;
      break; // 出现不合理的直接跳出播棋
    }
    else {
      curHole = seq[i] % 10 + (curTurn - 1) * 7;
      curHoleNum = count[curHole];
      count[curHole] = 0;
      for (let j = 0; j < curHoleNum; j++) {
        distriHole = (curHole + j) % 14 + 1;
        // 若播到对方的计分池，需要跳过
        if (distriHole == 14 && curTurn == 1 || distriHole == 7 && curTurn == 2) { 
          distriHole = distriHole % 14 + 1; //todo
        }
        count[distriHole]++;
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
  var dataBit = 0;
  if (isIllegal) {
    for (let i = 0; i < 14; i++) {
      board[i] = count[i + 1];
    }
    if (curTurn == 1) { // 选手1出现不合规行为
      dataBit = 200 + 2 * count[7] - 48;
    }
    else {
      dataBit = 200 + 48 - 2 * count[14];
    }
    board[14] = dataBit;
    return board;
  }
  // 统计选手1和选手2当前洞内所有棋子
  var surplus1 = 0, surplus2 = 0;
  for (let i = 1; i <= 6; i++) {
    surplus1 += count[i];
  }
  for (let i = 8; i <= 13; i++) {
    surplus2 += count[i];
  }
  if (surplus1 == 0 || surplus2 == 0) { // 游戏结束
    if (surplus1 == 0) {
      count[14] += surplus2;
    }
    else if (surplus2 == 0) {
      count[7] += surplus1;
    }
    if (count[7] == count[14]) { // 平局
      dataBit = 200;
    }
    else {
      dataBit = 200 + count[7] - count[14];
    }
  }
  else {
    dataBit = expectCurTurn;
  }
  // 将count复制到board中
  for (let i = 0; i < 14; i++) {
    board[i] = count[i + 1];
  }
  board[14] = dataBit;
  return board;
}
