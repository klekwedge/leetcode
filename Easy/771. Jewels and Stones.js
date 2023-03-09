/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  for (let i = 0; i < stones.length; i++) {
    const element = stones[i];

    if (jewels.includes(element)) {
      counter++;
    }
  }

  return counter;
};
