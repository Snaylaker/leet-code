const prices = [1, 2, 3, 4, 5, 6, 7]
rotate(prices, 3)
const currentAnswer = prices
const expectedAnswer = [5, 6, 7, 1, 2, 3, 4]

console.assert(currentAnswer == expectedAnswer, "%o", {
  currentAnswer,
  expectedAnswer,
})