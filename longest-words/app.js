exports.findLongestWords = sentence => {
  if(!sentence || sentence.length <=0 || typeof sentence !== 'string') return 'You need to pass a string sentence'
  else {
    const words = sentence.split(' ')
    const longest = words.sort((a, b) => b.length - a.length)[0].length
    return words.filter(word => word.length === longest)
      .filter((item, index) => words.indexOf(item) === index )
  }
}