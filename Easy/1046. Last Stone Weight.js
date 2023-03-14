/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  for (let i = 0; i < stones.length && stones.length > 1; i++) {
    if (stones[i] === stones[i + 1]) {
      stones.splice(i, 2);
      i = -1;
    } else if (stones[i] > stones[i + 1]) {
      stones[i] -= stones[i + 1];
      stones.splice(i + 1, 1);
      i = -1;
    }
    stones.sort((a, b) => b - a);
  }

  return stones;
};
