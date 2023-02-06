/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    return operations.reduce((acc, curr) => curr[1] === "+" ? ++acc : --acc, 0)
};