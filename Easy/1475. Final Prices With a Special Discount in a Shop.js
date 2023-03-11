/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const res = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        res.push(prices[i] - prices[j]);
        break;
      }

      if (j === prices.length - 1) {
        res.push(prices[i]);
      }
    }

    if (i === prices.length - 1) {
      res.push(prices[i]);
    }
  }

  return res;
};
