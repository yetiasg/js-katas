const sumPlusOne = arr => {
  return arr.reduce((prev, curr) => prev + curr, arr.length)
}

console.log(sumPlusOne([1, 2, 3, 4]))