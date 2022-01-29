exports.findPairs = (sum, numbers) => {
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