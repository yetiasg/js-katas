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

console.log(findAnagrams('ABC'))

// findAnagrams(word.split(''))