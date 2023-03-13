/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const canEat = candyType.length / 2;
  const differentCandies = [...new Set(candyType)].length;

  return differentCandies <= canEat ? differentCandies : canEat;
};
