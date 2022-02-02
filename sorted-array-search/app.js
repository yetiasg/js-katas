const search = (number, array = []) => {
  if(!Array.isArray(array) || array.some(el => typeof el !== 'number')) return 'You need to pass an array with numbers'
  if(!number || typeof number !== 'number') return 'You need to pass number to find'

  let start = 0
  let end = array.length-1

  while(start <= end){
    let center = Math.floor((start + end)/2)
    if(array[center] === number) return center
    else if(array[center] < number) start = center + 1
    else end = center - 1
  }
  return false
  
}

module.exports = {search}

const numbers = [
  1,   2,   3,   4,   5,   6,  23, 36,
  43,  45,  56,  63,  64,  67,  73, 77,
  245, 456, 523, 563, 624, 674, 678, 952
]

console.log(search(true, []))