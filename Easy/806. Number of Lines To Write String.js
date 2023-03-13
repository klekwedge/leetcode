/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let lines = 0;
  let lineWidth = 0;

  for (let i = 0; i < s.length; i++) {
    const currentWidth = widths[s[i].charCodeAt(0) - 97];

    if (lineWidth + currentWidth === 100 && i !== s.length - 1) {
      lines++;
      lineWidth = 0;
    } else if (lineWidth + currentWidth > 100) {
      lines++;
      lineWidth = 0;
      i--;
    } else {
      lineWidth += currentWidth;
    }
  }

  lines++;

  return [lines, lineWidth];
};
