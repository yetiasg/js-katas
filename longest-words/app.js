exports.findLongestWords = sentence => {
  const words = sentence.split(' ')
  const longest = words.sort((a, b) => b.length - a.length)[0].length
  return words.filter(word => word.length === longest)
    .filter((item, index) => words.indexOf(item) === index )
}