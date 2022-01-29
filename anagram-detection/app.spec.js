const { expect, describe, it } = require('@jest/globals')
const { findAnagram } = require('./app.js')

describe('Anagrams of given word in string', () => {
  it('finds all anagrams of given word in string', () => {
    const options = [
      {string: 'AdnBndAndBdaBn', anagram: 'dAnB', result: { result: [ 'dAnB', 'dAnB', 'dAnB' ], pieces: 3 }},
      {string: 'AdnBndAndBdaBn', anagram: 'dAn', result: { result: [ 'dAn', 'dAn', 'dAn', 'dAn' ], pieces: 4 }},
      {string: 'AbrAcadAbRa', anagram: 'cAda', result: { result: [ 'cAda', 'cAda' ], pieces: 2 }}
    ]

    options.forEach(el => {
      expect(findAnagram(el.string, el.anagram)).toEqual(el.result)
    })

  })
})