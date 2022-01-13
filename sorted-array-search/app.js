const search = (number, array) => {
  return (function searchNumber(left, right){
    const center = left + Math.floor((right-left) / 2)

    if(array[center] === number) return {center}
    if(left === center) return null
    if(array[center] > number) return searchNumber(left, center)
    if(array[center] < number) return searchNumber(center, right)
    return null
  })(0, array.length)
}

const arr = [
    1,   2,   3,   4,   5,   6,  23, 36,
    43,  45,  56,  63,  64,  67,  73, 77,
    245, 456, 523, 563, 624, 674, 678, 952
  ]

console.log(search(245, arr))