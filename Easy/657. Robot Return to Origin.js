/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let horizCounter = 0;
  let verticalCounter = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      verticalCounter++;
    } else if (moves[i] === "D") {
      verticalCounter--;
    } else if (moves[i] === "R") {
      horizCounter++;
    } else if (moves[i] === "L") {
      horizCounter--;
    }
  }

  return horizCounter === 0 && verticalCounter === 0;
};
