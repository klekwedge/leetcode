/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  let smallestEvenMultiple = n;

  while (true) {
    if (smallestEvenMultiple % 2 === 0 && smallestEvenMultiple % n === 0) {
      return smallestEvenMultiple;
    }

    smallestEvenMultiple += n;
  }
};
