/**
 * @param {string} num
 * @return {boolean}
 */

var digitCount = function (num) {
  for (let i = 0; i < num.length; i++) {
    const counts = num.split("").filter((item) => item === String(i)).length;
    if (Number(num[i]) !== counts) {
      return false;
    }
  }

  return true;
};
