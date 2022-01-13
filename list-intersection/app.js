const listIntersection = (arr1, arr2) => {
  return arr1.filter(el => arr2.includes(el))
}

console.log(listIntersection(['dog', 'cat', 'egg'], ['cat', 'dog', 'chicken']))