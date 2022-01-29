exports.findFibonacci = position => {
  const result = [0, 1]

  for(let i=2; i<=position; i++) {
    result[i] = result[i-2] + result[i-1];
  }
  return result[position]
}