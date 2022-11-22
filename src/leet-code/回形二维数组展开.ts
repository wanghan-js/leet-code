export function 回形数组(arr: number[][]): number[] {
  if (arr.length === 0) {
    return [];
  }

  const res = [];
  const row = arr.length;
  const column = arr[0].length;
  const count = row * column;

  // 上右下左 4 条边遍历的次数
  let top = 0;
  let right = 0;
  let bottom = 0;
  let left = 0;

  while (res.length < count) {
    // 每遍历一次是一大圈
    // 每一大圈由 4 个小循环构成
    // 每次循环都要更新 4 条边的值

    // 上
    for (let i = left; i < column - right; i++) {
      res.push(arr[top][i]);
    }
    top += 1;

    // 右
    for (let i = top; i < row - bottom; i++) {
      res.push(arr[i][column - 1 - right]);
    }
    right += 1;

    // 下
    for (let i = column - 1 - right; i >= left; i--) {
      res.push(arr[row - 1 - bottom][i]);
    }
    bottom += 1;

    // 左
    for (let i = row - 1 - bottom; i >= top; i--) {
      res.push(arr[i][left]);
    }
    left += 1;
  }

  return res;
}
