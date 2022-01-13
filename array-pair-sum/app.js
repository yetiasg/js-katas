const findPairs = (sum, numbers) => {
  const map = {}
  const results = []
  numbers.forEach((num, i) => {
    if(map[num]) {
      results.push([map[num], num]);
      map[sum - num] = null
    }
    else map[sum - num] = num
  })
  return results
}

console.log(findPairs(10, [3, 4, 5, 5, 6, 7]))
console.log(findPairs(8, [3, 4, 5, 4, 4, 3, 2]))