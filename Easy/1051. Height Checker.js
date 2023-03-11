/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== heights[i]) {
      counter++;
    }
  }

  return counter;
};
