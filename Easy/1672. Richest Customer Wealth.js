/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let res = 0;
    for (let i = 0; i < accounts.length; i++) {
        const sum = accounts[i].reduce((a, b) => a + b)
        if (res < sum) {
            res = sum
        }
    }
    return res;
};