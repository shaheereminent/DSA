// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// var maxProfit = function (prices) {
//   let lowest = prices[0]
//   let highest = prices[0]
//   let buy
//   let sell
//   let profit
//   let dayPassed
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < lowest) {
//       lowest = prices[i]
//       console.log(`giving the index to check day passed ${i}`)
//       dayPassed = i + 1
//     }
//   }

//   buy = lowest

//   for (let i = dayPassed + 1; i < prices.length; i++) {
//     if (prices[i] > highest) {
//       highest = prices[i]
//     }
//   }

//   sell = highest
//   profit = highest - lowest
//   console.log(profit)
// }

// // maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([7, 6, 4, 3, 1])

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0]
  let sell = prices[0]
  let dayPassed = 0
  let profit = 0

  console.log(buy)
  console.log(sell)

  // buying stock ie lowest
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i]
      dayPassed = i + 1
      sell = buy
    }
  }

  console.log(`buying here ${buy}`)
  console.log(dayPassed)
  // selling stock ie highest
  for (let i = dayPassed; i < prices.length; i++) {
    if (prices[i] > sell) {
      sell = prices[i]
    }
  }
  console.log(`selling here ${sell}`)

  profit = sell - buy
  console.log(profit)
}

maxProfit([2, 4, 1])
