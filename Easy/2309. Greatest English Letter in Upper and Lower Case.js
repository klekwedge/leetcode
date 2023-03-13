/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  const upper = [
    ...new Set(s.split("").filter((item) => item === item.toUpperCase(""))),
  ];
  const lower = [
    ...new Set(s.split("").filter((item) => item === item.toLowerCase(""))),
  ];

  const arr = [];

  for (let i = 0; i < lower.length; i++) {
    if (upper.includes(lower[i].toUpperCase())) {
      arr.push(lower[i]);
    }
  }

  let res = ' ';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) > res.charCodeAt(0)) {
      res = arr[i];
    }
  }

  return res === ' ' ? "" : res.toUpperCase();
};
