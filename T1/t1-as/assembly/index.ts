export function bocchiShutUp(flag: i32, seq: Array<i32>, size: i32): i32 {
  var count = new Array<i32>(10)
  if (flag == 1) {
    for (let i = 0; i < seq.length; i++) {
      if (seq[i] / 10 == 1) {
        count[seq[i] % 10]++;
      }
    }
  }
  else if (flag == 2) {
    for (let i = 0; i < seq.length; i++) {
      if (seq[i] / 20 == 1) {
        count[seq[i] % 20]++;
      }
    }
  }
  var maxCount = 0;
  var maxNum = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > maxCount) {
      maxCount = count[i];
      maxNum = i;
    }
  }
  var multiMax = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i] == maxCount) {
      multiMax++;
    }
  }
  if (multiMax != 1) {
    return 10;
  }
  return maxNum + flag * 10;
}
