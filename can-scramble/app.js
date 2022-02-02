exports.canScramble = (word1, word2) => {
  if(!word1 || word1.length <=0 || typeof word1 !== 'string') throw new Error('You need to pass a string')
  if(!word2 || word2.length <=0 || typeof word2 !== 'string') throw new Error('You need to pass a string')

  return word1.split('').sort().join('') === word2.split('').sort().join('')
}