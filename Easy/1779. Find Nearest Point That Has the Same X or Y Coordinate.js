/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let distance = Number.MAX_VALUE;
  let index = -1;

  for (let i = 0; i < points.length; i++) {
    const currentX = points[i][0];
    const currentY = points[i][1];

    const currentDistance = Math.abs(x - currentX) + Math.abs(y - currentY);
    if ((currentX === x || currentY === y) && distance > currentDistance) {
      distance = currentDistance;
      index = i;
    }
  }

  return index;
};
