exports.findFibonacci = position => {
  if(typeof position !== 'number') throw new Error('You need to pass a number')
  if(position <0 ) throw new Error('Bad position')

  const result = [0, 1]

  for(let i=2; i<=position; i++) {
    result[i] = result[i-2] + result[i-1];
  }
  return result[position]
}