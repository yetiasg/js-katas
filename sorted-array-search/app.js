const search = (number, array) => {
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
