exports.listIntersection = (arr1, arr2) => {
  if(!arr1 || arr1.length <=0 || !Array.isArray(arr1)) return 'You need to pass an array'
  if(!arr2 || arr2.length <=0 || !Array.isArray(arr2)) return 'You need to pass an array'

  return arr1.filter(el => arr2.includes(el))
}