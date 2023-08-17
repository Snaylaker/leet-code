function maxProfit(prices) {
  const copy = [...prices]
  const smallestValue = copy.sort()[0]
  while (prices.length > 1) {
    // find the cheapest day
    const copy = [...prices]
    const smallestValue = copy.sort()[0]
    // split the array from the cheapest day and forth
    const idxSmallest = prices.indexOf(smallestValue)
    const prices = prices.slice(idxSmallest)
    return 1
  }

  // do the same thing over again
  // edge case if the smallest number is at the end of the array break return 0
}

const prices = [7, 1, 5, 3, 6, 4]
const expectedAnswer = 7
const currentAnswer = maxProfit(prices)
log
console.assert(currentAnswer === expectedAnswer, "%o", {
  currentAnswer,
  expectedAnswer,
})
