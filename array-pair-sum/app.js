const findPairs = (sum, numbers) => {
  const pairs = []
  numbers.forEach((num, i) => {
    if(numbers.includes(sum-num)){
      if(numbers.indexOf(sum-num) !== numbers.indexOf(num)){
        pairs.push({num1: sum-num, num2: num})
        numbers[numbers.indexOf(sum-num)]=null
        numbers[i]=null
      }
    }
  })
  return pairs
}

console.log(findPairs(10, [3, 4, 5, 5, 6, 7]))
// console.log(findPairs(8, [3, 4, 5, 4, 4]))