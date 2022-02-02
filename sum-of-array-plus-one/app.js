exports.sumPlusOne = (arr = []) => {
  if(Array.isArray(arr)) {
    if(arr.some(el => typeof el !== 'number')) return 'You can sum numbers only'
    else return  arr.reduce((prev, curr) => prev + curr, arr.length)
  } 
  return 'You need to pass numbers in array'
};
