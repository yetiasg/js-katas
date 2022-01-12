const findElement = (position, array) => array.sort((a, b) => a-b)[position-1]

console.log(findElement(3, [3, 1, 2, 1, 4]))