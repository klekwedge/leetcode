/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let category = "";
  if (
    length >= 10 ** 4 ||
    width >= 10 ** 4 ||
    height >= 10 ** 4 ||
    length * width * height >= 10 ** 9
  ) {
    category += "Bulky";
  }

  if (mass >= 100) {
    category += "Heavy";
  }

  if (!category.includes("Bulky") && !category.includes("Heavy")) {
    return "Neither";
  }

  return category.includes("BulkyHeavy") ? "Both" : category;
};
