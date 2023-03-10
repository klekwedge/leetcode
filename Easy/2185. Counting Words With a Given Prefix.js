/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    const regex = new RegExp(`^${pref}`, 'gi')
    return words.filter(item => item.match(regex)).length
};