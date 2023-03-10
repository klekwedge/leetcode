/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title
    .split(" ")
    .map((item) =>
      item.length <= 2
        ? item.toLowerCase()
        : item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
    )
    .join(" ");
};
