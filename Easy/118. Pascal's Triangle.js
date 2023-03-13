/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [[1]];

  for (let i = 1; i < numRows; i++) {
    const oldArr = res[res.length - 1];
    const newArr = Array(oldArr.length + 1).fill(1);

    if (i !== 1) {
      for (let i = 1; i < newArr.length - 1; i++) {
        newArr[i] = oldArr[i - 1] + oldArr[i];
      }
    }

    res.push(newArr);
  }

  return res;
};
