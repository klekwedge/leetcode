/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let currentCandy = 1;
  const arr = new Array(num_people).fill(0);

  for (let i = 0; i < arr.length && candies !== 0; i++) {
    if (candies - currentCandy >= 0) {
      arr[i] += currentCandy;
      candies -= currentCandy;
      currentCandy++;
    } else {
      arr[i] += candies;
      break;
    }

    if (i === arr.length - 1) {
      i = -1;
    }
  }

  return arr;
};
