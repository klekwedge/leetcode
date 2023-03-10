/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  const res = Object.entries(obj)
    .filter((item) => Number(item[0]) === item[1])
    .map((item) => item[1]);

  return res.length !== 0 ? Math.max(...res) : -1;
};
