/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  if (
    coordinates.includes("a") ||
    coordinates.includes("c") ||
    coordinates.includes("e") ||
    coordinates.includes("g")
  ) {
    return Number(coordinates[1]) % 2 === 0;
  } else {
    return Number(coordinates[1]) % 2 !== 0;
  }
};
