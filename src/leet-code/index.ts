import { Stack } from "@/leet-code/stack";
import { threeSum } from "@/leet-code/threeSum";
import { maxAreaOfIsland } from "@/leet-code/maxAreaOfIsland";
import { hasPathSum } from "@/leet-code/hasPathSum";
import { TreeNode } from "@/leet-code/treeNode";
import { hasSequence, 回形数组 } from "@/leet-code/回形二维数组展开";
import { arrToTree, drink } from "@/leet-code/drink";
import { sandbox } from "@/leet-code/js_proxy";
import { shuffle } from "@/leet-code/shuffle";
import { MyArray } from "@/leet-code/myArray";
import {
  bubbleSort,
  insertionSort,
  quickSort,
  selectionSort,
} from "@/leet-code/sort";
import { Stack2queue } from "@/leet-code/stack2queue";
import { Queue2stack } from "@/leet-code/queue2stack";
import { arrayLittleSum } from "@/leet-code/arrayLittleSum";

export function __main__() {
  const arr = [1, 3, 4, 2, 5]
  const sum = arrayLittleSum(arr)
  console.log(sum, arr)
  // const stack = new Queue2stack<number>();
  // stack.push(1);
  // stack.push(2);
  // stack.push(3);
  // stack.push(4);
  // stack.push(5);

  // console.log(stack);
  // console.log(stack.size());
  // console.log(stack.peek());
  // stack.push(6);
  // console.log(stack.pop());
  // console.log(stack.pop());
  // const arr = new MyArray<string>(5);
  // arr.push("a");
  // console.log(arr);
  // console.log(arr.get(0));
  // arr.set(1, "c");
  // arr.set(2, "cf");
  // arr.set(3, "ca");
  // arr.set(4, "cga");
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.get(0);

  // const arr = [4, 3, 6, 1, 2, 5];
  // quickSort(arr);
  // console.log(arr);
  // console.log(quickSort(arr));

  // 用户输入的代码
  // const code = `
  //   console.log(Math.random())
  //   location.href = 'www.baidu.com'
  //   func(foo)
  // `;
  // sandbox(code);
  // const arr = [
  //   [1, 2, 3, 4, 5, 6],
  //   [22, 23, 24, 25, 26, 7],
  //   [21, 36, 37, 38, 27, 8],
  //   [20, 35, 42, 39, 28, 9],
  //   [19, 34, 41, 40, 29, 10],
  //   [18, 33, 32, 31, 30, 11],
  //   [17, 16, 15, 14, 13, 12],
  // ];
  // console.log(回形数组(arr));
  // for (let i = 0; i < 20; i++) {
  //   console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  // }
  // let grid = [
  //   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  //   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  //   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  // ];
  // console.log(maxAreaOfIsland(grid));
  //
  // grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
  // console.log(maxAreaOfIsland(grid));
  // const tree = new TreeNode(5);
  // tree.left = new TreeNode(4);
  // tree.right = new TreeNode(8);
  // tree.left.left = new TreeNode(11);
  // tree.left.left.left = new TreeNode(7);
  // tree.left.left.right = new TreeNode(2);
  // tree.right.left = new TreeNode(13);
  // tree.right.right = new TreeNode(4);
  // tree.right.right.right = new TreeNode(1);
  // hasPathSum(tree, 22);
  // for (let i = 0; i < 21; i++) {
  //   console.log(drink(i, 7));
  // }
}
