exports.countClosedLoops = number => {
  let loops = 0
  let numbers = number.toString().split('')
  numbers.forEach(num => {
    if( num === '6' || num === '9') loops++
    if( num === '8' ) loops+=2
  })
  return loops
}