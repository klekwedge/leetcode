/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) {
    return true;
  }

  let arr = s.split("");
  for (let i = 0; i < goal.length - 1; i++) {
    const del = arr.splice(0, 1).join('');
    arr.push(del);
    if (arr.join("") === goal) {
      return true;
    }
  }

  return false;
};
