/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const arr = s.split("");
  let firstPointer = 0;
  let secondPointer = arr.length - 1;

  while (firstPointer < secondPointer) {

    if (
      /[a-zA-Z]/.test(arr[firstPointer]) &&
      /[a-zA-Z]/.test(arr[secondPointer])
    ) {
      [arr[firstPointer], arr[secondPointer]] = [
        arr[secondPointer],
        arr[firstPointer],
      ];
      firstPointer++;
      secondPointer--;
    }
    if (!/[a-zA-Z]/.test(arr[firstPointer])) {
      firstPointer++;
    }

    if (!/[a-zA-Z]/.test(arr[secondPointer])) {
      secondPointer--;
    }
  }

  return arr.join("");
};
