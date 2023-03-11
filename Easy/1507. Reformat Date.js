/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  data = date.split(" ").reverse();
  data[2] = data[2]
    .replace(/[^\d]/gi, "")
    .replace(/\d+/, (value) => (value.length === 1 ? `0${value}` : value));
  data[1] = month[data[1]];
  return data.join("-");
};
