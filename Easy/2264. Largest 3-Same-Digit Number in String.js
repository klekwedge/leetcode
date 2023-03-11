/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let max = "";
  for (let i = 0; i < num.length - 2; i++) {
    const el = num.slice(i, i + 3).split("");

    if (el.every((item, i, arr) => item === arr[0])) {
      max = Number(max) <= Number(el.join("")) ? el.join("") : max;
    }
  }

  return max;
};
