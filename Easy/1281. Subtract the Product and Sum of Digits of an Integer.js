/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  return (
    String(n)
      .split("")
      .reduce((prev, next) => +prev * +next) -
    String(n)
      .split("")
      .reduce((prev, next) => +prev + +next)
  );
};
