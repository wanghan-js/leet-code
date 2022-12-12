// 各种排序算法

// 选择排序: 一直找最小的数

export function selectionSort(xs: number[]) {
  const len = xs.length;
  for (let i = 0; i < len; i++) {
    // 从头到尾遍历每一个元素
    // 记录下最小数的下标, 初始为 i
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 更新 minIndex 的值
      if (xs[minIndex] > xs[j]) {
        minIndex = j;
      }
    }
    // 交换 minIndex 和 i 下标的值
    swap(xs, i, minIndex);
  }
}

// 冒泡排序: 一直找最大的数
export function bubbleSort(xs: number[]) {
  const len = xs.length;
  // 每遍历一次, 最大下标就少 1 (因为最大值已经确定了)
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      // 如果前面的比后面的大, 就交换
      if (xs[j] > xs[j + 1]) {
        swap(xs, j, j + 1);
      }
    }
  }
}

// 插入排序: 确保前面的部分有序
export function insertionSort(xs: number[]) {
  const len = xs.length;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0 && xs[j] > xs[j + 1]; j--) {
      // 从右往左比较, 遇到比 j 大的就交换
      swap(xs, j, j + 1);
    }
  }
}

// 快速排序: 分治思想
export function quickSort(xs: number[]): number[] {
  // 先随便找个数, 把比它大的放左边子数组, 比它小的放右边子数组, 递归排序
  if (xs.length < 2) {
    return xs;
  }
  const pivot = xs[0];
  const left: number[] = [];
  const right: number[] = [];
  // 注意这里 i 的下标一定要从 1 开始, 因为 0 已经被选做 pivot 了
  for (let i = 1; i < xs.length; i++) {
    const n = xs[i];
    if (n >= pivot) {
      right.push(n);
    } else {
      left.push(n);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 归并排序: 分治: O(N*logN)
// 这种类型的递归算法的时间复杂度计算公式: T(N) = a * T(N/b) + O(N^d)
// 其中 a, b, d 都为常数
// a: 递归的子问题的个数; b: 每个子问题占据整个问题规模 N 的倒数; d: 处理子问题外, 其他算法步骤的时间复杂度
// if logba > d, T(N) = O(N^logba); if logba < d, T(N) = O(N^d); if logba == d, T(N) = O(N^d * logN)
export function mergeSort(xs: number[]): number[] {
  if (xs.length < 2) {
    return xs;
  }
  const mid = xs.length >> 1;
  // 先把两部分排好序, 最后把他们合并起来
  const part1 = mergeSort(xs.slice(0, mid));
  const part2 = mergeSort(xs.slice(mid));

  let i = 0;
  let j = 0;
  const arr: number[] = [];
  while (i < part1.length || j < part2.length) {
    const a = part1[i];
    const b = part2[j];
    if (a === undefined) {
      arr.push(...part2.slice(j));
      break;
    }
    if (b === undefined) {
      arr.push(...part1.slice(i));
      break;
    }
    if (a > b) {
      arr.push(b);
      j++;
    } else {
      arr.push(a);
      i++;
    }
  }
  return arr;
}

// 交换数组中元素的位置
function swap(xs: number[], i: number, j: number) {
  [xs[i], xs[j]] = [xs[j], xs[i]];
}
