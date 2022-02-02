exports.findPairs = (sum, numbers = []) => {
  if(numbers.length <=0 || !Array.isArray(numbers) || numbers.some(el => typeof el !== 'number')) throw new Error('You need to pass an array with numbers')
  if(!sum || typeof sum !== 'number') throw new Error('You need to pass number to find')

  const map = {}
  const results = []
  numbers.forEach((num, i) => {
    if(map[num]) {
      results.push([map[num], num]);
      map[sum - num] = null
    }
    else map[sum - num] = num
  })
  return results.length > 0 ? results : false
}
