/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const arr = Array(matrix.length)
    .fill(0)
    .map((item, index) => index + 1);

  for (let i = 0; i < matrix.length; i++) {
    if (!arr.every((item) => matrix[i].includes(item))) {
      return false;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    const buff = [];
    for (let i = 0; i < arr.length; i++) {
      buff.push(matrix[i][j]);
    }
    if (!arr.every((item) => buff.includes(item))) {
      return false;
    }
  }

  return true;
};
