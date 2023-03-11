/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let oneCounter = 1;
  let oneMax = 1;

  let zeroCounter = 1;
  let zeroMax = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] && s[i] === "1") {
      oneCounter++;
    } else if (s[i] === s[i + 1] && s[i] === "0") {
      zeroCounter++;
    } else {
      zeroMax = zeroMax < zeroCounter ? zeroCounter : zeroMax;
      zeroCounter = 1;
      oneMax = oneMax < oneCounter ? oneCounter : oneMax;
      oneCounter = 1;
    }
  }

  oneMax = !s.includes("1") ? 0 : oneMax;
  zeroMax = !s.includes("0") ? 0 : zeroMax;

  return oneMax > zeroMax;
};
