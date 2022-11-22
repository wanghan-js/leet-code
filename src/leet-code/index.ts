import { Stack } from "@/leet-code/stack";
import { threeSum } from "@/leet-code/threeSum";
import { maxAreaOfIsland } from "@/leet-code/maxAreaOfIsland";
import { hasPathSum } from "@/leet-code/hasPathSum";
import { TreeNode } from "@/leet-code/treeNode";
import { 回形数组 } from "@/leet-code/回形二维数组展开";

export function __main__() {
  const arr = [
    [1, 2, 3, 4, 5, 6],
    [22, 23, 24, 25, 26, 7],
    [21, 36, 37, 38, 27, 8],
    [20, 35, 42, 39, 28, 9],
    [19, 34, 41, 40, 29, 10],
    [18, 33, 32, 31, 30, 11],
    [17, 16, 15, 14, 13, 12],
  ];
  console.log(回形数组(arr));
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
}
