const findAnagrams = word => {
  const signs = [...word]
  const anagrams = []
  if(signs.length === 1) return signs
  signs.forEach(sign => {
    findAnagrams(signs.join('').replace(sign, '').split('')).concat('').map(subSign => {
      const word = [sign].concat(subSign)
      if(word.join('').length === signs.length)
        anagrams.push([sign].concat(subSign))
    })
  })
  return anagrams.map(el => el.join(''))
}

exports.findAnagram = (text, word) => {
  const anagrams = findAnagrams(word.split(''))
  const result = []

  for(let i=0; i<=text.length-word.length; i++) {
    const piece = text.substr(i, word.length )
    if(anagrams.includes(piece)) result.push(word)
  }
  return {result: result || 'null', pieces: result.length}
}

