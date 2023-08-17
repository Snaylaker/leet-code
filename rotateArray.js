function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    let valueToEnqueue = nums[nums.length - 1]
    for (let s = nums.length - 1; s > 0; s--) {
      nums[s] = nums[s - 1]
    }
    nums[0] = valueToEnqueue
  }
}
const prices = [1, 2, 3, 4, 5, 6, 7]
rotate(prices, 3)
const currentAnswer = prices
const expectedAnswer = [5, 6, 7, 1, 2, 3, 4]

console.assert(currentAnswer == expectedAnswer, "%o", {
  currentAnswer 
  expectedAnswer,
})
