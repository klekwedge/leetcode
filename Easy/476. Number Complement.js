/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let newNum = "";
  let res = "";

  while (num > 0) {
    newNum = `${num % 2}` + newNum;
    num = Math.floor(num / 2);
  }

  for (let i = 0; i < newNum.length; i++) {
    res += newNum[i] === "0" ? "1" : "0";
  }

  return parseInt(res, 2);
};
