/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = "aeiouAEIOU";
  const a = s.slice(0, s.length / 2);
  const b = s.slice(s.length / 2);

  return (
    a.split("").filter((item) => vowels.includes(item)).length ===
    b.split("").filter((item) => vowels.includes(item)).length
  );
};
