exports.sumOfMultiples = (multiples, number) => {
  const nums = []
  for(let i=0; i<number; i++){
    multiples.some(multi => i % multi === 0 && i!== 0) ? nums.push(i) : false
  }
  return nums.reduce((last, number) => last+number);
}