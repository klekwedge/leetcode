/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  const obj = {};
  let min = Math.abs(arr[1] - arr[0]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[j] - arr[i]);
      if (obj[diff]) {
        obj[diff] = [...obj[diff], [arr[i], arr[j]]];
      } else {
        obj[diff] = [[arr[i], arr[j]]];
      }
      min = min > diff ? diff : min;
    }
  }

  return obj[min];
};
