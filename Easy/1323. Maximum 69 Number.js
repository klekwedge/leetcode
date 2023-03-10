/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let res = String(num).split("");

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "6") {
      res[i] = "9";
      return Number(res.join(''));
    }
  }

  return Number(res.join(''));
};
