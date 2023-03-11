/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  for (let i = 0; i < k; i++) {
    const maxEl = Math.max(...gifts);
    const indexMaxEl = gifts.indexOf(maxEl);
    gifts[indexMaxEl] = Math.floor(Math.sqrt(gifts[indexMaxEl]));
  }

  return gifts.reduce((prev, next) => prev + next);
};
