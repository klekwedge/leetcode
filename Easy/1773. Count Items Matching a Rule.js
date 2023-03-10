/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let counter = 0;
  for (let i = 0; i < items.length; i++) {
    const el = items[i];
    if (
      (ruleKey === "type" && el[0] === ruleValue) ||
      (ruleKey === "color" && el[1] === ruleValue) ||
      (ruleKey === "name" && el[2] === ruleValue)
    ) {
      counter++;
    }
  }

  return counter;
};
