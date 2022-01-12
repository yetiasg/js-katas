const findFibonacci = position => {
  const result = [0, 1]
  if(position > 2) {
    for(let i=2; i<position; i++) {
      result[i] = result[i-2] + result[i-1];
    }
  }else return result[position-1]
  return result[position-1]
}

console.log(findFibonacci(7))