/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    if (i % 5 === 0 && i % 3 == 0) {
      res[i] = "FizzBuzz";
    } else if (i % 3 === 0) {
      res[i] = "Fizz";
    } else if (i % 5 === 0) {
      res[i] = "Buzz";
    } else {
      res[i] = `${i}`;
    }
  }

  return res.slice(1);
};
