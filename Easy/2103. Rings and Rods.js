/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  const obj = {};
  const rgb = ["R", "G", "B"];
  let counter = 0;

  for (let i = 0; i < rings.length; i += 2) {
    const el = rings.slice(i, i + 2);
    obj[el[1]] = obj[el[1]] ? obj[el[1]] + el[0] : el[0];
  }

  for (const el of Object.entries(obj)) {
    if (rgb.every((item) => el[1].includes(item))) {
      counter++;
    }
  }

  return counter;
};
