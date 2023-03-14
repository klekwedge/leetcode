/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const arrS = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (!arrS.includes(t[i])) {
      return t[i];
    } else {
      const index = arrS.indexOf(t[i]);
      arrS.splice(index, 1);
    }

  }
};
