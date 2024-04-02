// The entry file of your WebAssembly module.

/*export function add(a: i32, b: i32): i32 {
  return a + b;
}*/
/*
  1. 防止对方取子
  2. 尽可能让最后一个棋子落入计分洞
  3. 尽可能保持最右侧洞为空
  4. 对方有棋洞包含大量棋子时，拖慢进度
*/
export function mancalaOperator(flag: i32, status: Array<i32>): i32 {
  var nextMove = 0;
  var beginHole = 0, endHole = 0;
  // 对方是否有取子可能
  beginHole = (2 - flag) * 7;
  endHole = 5 + (2 - flag) * 7;
  for (let i = beginHole; i <= endHole; i++) {
    if (status[i] == 0 && status[12 - i] != 0) { //todo
      // 判断对方是否有可能把子落到这个洞
      for (let j = beginHole; j <= endHole; j++) {
        if (i == j) continue;
        if (status[j] == i - j || status[j] == i - j + 13) {
          nextMove = 12 - i;
          return flag * 10 + nextMove + 1 - (flag - 1) * 7;
        }
      }
    }
  }
  // 我方是否能取子
  beginHole = (flag - 1) * 7;
  endHole = 5 + (flag - 1) * 7;
  var maxNum = 0, maxNumHole = 0, lastHole = 0;
  for (let i = beginHole; i <= endHole; i++) {
    if (status[i] == 0) {
      continue;
    }
    lastHole = (i + status[i]) % 14;
    if (beginHole <= lastHole && lastHole <= endHole) {
      if (status[i] > 6) { // 经过了对方的计分洞
        lastHole = (lastHole + 1) % 14;
        if (beginHole > lastHole || lastHole > endHole) { // 最后一颗不落在己方，跳过
          continue;
        }
      }
      if (status[lastHole] == 0 && status[12 - lastHole] != 0) {
        if (status[12 - lastHole] > maxNum) {
          maxNum = status[12 - lastHole];
          maxNumHole = i;
        }
      }
    }
  }
  if (maxNum != 0) {
    nextMove = maxNumHole;
    return flag * 10 + nextMove + 1 - (flag - 1) * 7;
  }
  // 是否最后一颗可能落入自己的计分洞
  beginHole = (flag - 1) * 7;
  endHole = 5 + (flag - 1) * 7;
  for (let i = beginHole; i <= endHole; i++) {
    if (status[i] == flag * 7 - 1 - i) {
      nextMove = i;
      return flag * 10 + nextMove + 1 - (flag - 1) * 7;
    }
  }
  // 是否可能保持最右侧为空
  beginHole = (flag - 1) * 7;
  endHole = 5 + (flag - 1) * 7;
  if (status[endHole] ==  0) { // 最右侧为空
    for (let i = beginHole; i <= endHole; i++) {
      if (status[i] < endHole - i && status[i] > 0) {
        nextMove = i;
        return flag * 10 + nextMove + 1 - (flag - 1) * 7;
      }
    }
  }
  else { // 最右侧不为空
    nextMove = endHole;
    return flag * 10 + nextMove + 1 - (flag - 1) * 7;
  }
  // 拖慢进度（尽可能让子留在本方？）
  var minLost = 100, minLostHole = 0, curLost = 0;
  beginHole = (flag - 1) * 7;
  endHole = 5 + (flag - 1) * 7;
  for (let i = beginHole; i <= endHole; i++) {
    curLost = status[i] - endHole + i;
    if (curLost < minLost && status[i] > 0) {
      minLost = curLost;
      minLostHole = i;
    }
  }
  nextMove = minLostHole;
  return flag * 10 + nextMove + 1 - (flag - 1) * 7;
}
