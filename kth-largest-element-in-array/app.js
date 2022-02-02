exports.findElement = (position, array) => {
  if(!array || array.length <=0 || !Array.isArray(array)) return 'You need to pass an array with numbers'
  if(typeof position !== 'number') return 'You need to pass a number'
  if(position > array.length || position <0 ) return 'Bad position'
  
  return array.sort((a, b) => a-b)[position-1]
}