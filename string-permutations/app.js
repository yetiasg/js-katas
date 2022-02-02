const search = (word) => {
  const signs = [...word]
  const anagrams = []
  if(signs.length === 1) return signs
  signs.forEach(sign => {
    search(signs.join('').replace(sign, '').split('')).concat('').map(subSign => {
      const word = [sign].concat(subSign)
      if(word.join('').length === signs.length)
        anagrams.push([sign].concat(subSign))
    })
  })
  return anagrams.map(el => el.join(''))
}

exports.findAnagrams = (word) => {
  if(word && word.length >=1 && typeof word === 'string'){
    return search(word)
  }
  throw new Error('You need to pass a string')
}