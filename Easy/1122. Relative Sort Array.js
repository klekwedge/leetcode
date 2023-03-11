/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const res = [];

  for (let i = 0; i < arr2.length; i++) {
    res.push(...arr1.filter((item) => item === arr2[i]));
  }

  return [
    ...res,
    ...arr1.filter((item) => !arr2.includes(item)).sort((a, b) => a - b),
  ];
};
