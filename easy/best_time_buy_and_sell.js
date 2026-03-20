// Brute Force O(n²) 
/**
 * Best Time to Buy and Sell Stock
 * Approach: Brute Force
 * Time Complexity: O(n²) - two nested loops
 * Space Complexity: O(1) - no extra space used
 */
// var maxProfit = function (prices) {
//     let max = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             let result = prices[j] - prices[i];
//             if (result > max) {
//                 max = result;
//             }
//         }
//     }

//     return max;
// };

//O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let result;
    let max = 0;
    let min=prices[0];

    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i];
        }else{
            result=prices[i]-min;
            if(result>max){
                max=result;
            }
        }
    }

    if (max > 0) {
        return max
    } else {
        return 0;
    }

};