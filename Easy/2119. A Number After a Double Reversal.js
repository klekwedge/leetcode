/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return (
    num ===
    Number(
      String(Number(String(num).split("").reverse().join("")))
        .split("")
        .reverse()
        .join("")
    )
  );
};
