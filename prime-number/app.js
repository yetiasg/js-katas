exports.isNumberPrime = number => {
  if(typeof number !== 'number') throw new Error('You need to pass a number')
  
  if(number <=0) return false;
  if(number === 2) return true;
  for(let i=2; i<(number+1)/2; i++){
    if(number % i === 0 ) return false;
  }
  return number > 1;
}