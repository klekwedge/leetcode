/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const nums = String(num).split("").join("");
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (num % +nums[i] === 0) {
      counter++;
    }
  }

  return counter;
};
