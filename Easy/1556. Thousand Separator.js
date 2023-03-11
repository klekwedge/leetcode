/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let str = String(n);

  if (str.length <= 3) {
    return str;
  }

  let spaceCounter = 0;
  let number = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (spaceCounter === 3) {
      number = "." + number;
      spaceCounter = 0;
    }
    number = str[i] + number;
    spaceCounter++;
  }

  return number;
};
