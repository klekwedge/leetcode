/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  const res = [];
  for (let i = 0; i < blocks.length && i + k - 1 < blocks.length; i++) {
    const currentBlock = blocks.slice(i, i + k);
    res.push(currentBlock.replace(/B/gi, "").length);
  }

  return Math.min(...res);
};
