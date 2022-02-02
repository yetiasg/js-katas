const search = (number, array = []) => {
  if(!Array.isArray(array) || array.some(el => typeof el !== 'number')) throw new Error('You need to pass an array with numbers')
  if(!number || typeof number !== 'number') throw new Error('You need to pass number to find')

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

module.exports = { search }