exports.sumPlusOne = (arr = []) => {
  if(Array.isArray(arr)) {
    if(arr.some(el => typeof el !== 'number')) throw new Error('You can sum numbers only') 
    else return  arr.reduce((prev, curr) => prev + curr, arr.length)
  } 
  throw new Error( 'You need to pass numbers in array')
};
