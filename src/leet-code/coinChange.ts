/**
 * 322. 零钱兑换
 * 中等
 * 2.2K
 * 相关企业
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 示例 2：
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 示例 3：
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 * 提示：
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 231 - 1
 * 0 <= amount <= 104
 */
export function coinChange(coins: number[], amount: number): number {
  // 加备忘录, 避免重复计算
  const memo: Map<number, number> = new Map();

  function dp(coins: number[], amount: number): number {
    if (amount === 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }
    if (memo.get(amount)) {
      return memo.get(amount) as number;
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      const count = dp(coins, amount - coin);
      if (count === -1) {
        continue;
      }
      res = Math.min(res, count + 1);
    }
    res = res === Number.MAX_SAFE_INTEGER ? -1 : res;
    memo.set(amount, res);
    return res;
  }

  return dp(coins, amount);
}
