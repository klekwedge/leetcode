/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    for(let i = 0; i < candies.length; i++){
        if(Math.max(...candies) > candies[i] + extraCandies){
            res.push(false);
        }
        else{
            res.push(true)
        }
    }
    return res;
};