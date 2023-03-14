/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  let res = "";
  while (n > 0) {
    res = `${n % 2}${res}`;
    n = Math.floor(n / 2);
  }

  return res
    ? parseInt(
        res
          .split("")
          .map((item) => (item === "0" ? "1" : "0"))
          .join(""),
        2
      )
    : 1;
};
