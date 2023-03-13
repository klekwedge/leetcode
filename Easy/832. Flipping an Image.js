/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((item) =>
    item.reverse().map((item) => (item === 1 ? 0 : 1))
  );
};
