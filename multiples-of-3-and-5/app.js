exports.sumOfMultiples = (multiples, number) => {
  if(!multiples || multiples.length <=0 || !Array.isArray(multiples) || multiples.some(el => typeof el !== 'number')) throw new Error('You need to pass an array with numbers')
  if(!number || typeof number !== 'number') throw new Error('You need to pass number')
  
  const nums = []
  for(let i=0; i<number; i++){
    multiples.some(multi => i % multi === 0 && i!== 0) ? nums.push(i) : false
  }
  return nums.reduce((last, number) => last+number);
}