const { expect, describe, it } = require('@jest/globals')
const { findAnagrams } = require('./app.js')

describe('#string-permutations', () => {
  describe('Valid arguments input', () => {
    it('finds all possible anagrams for given string', () => {
      const string = 'ABC'
      const result = [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]

      expect(findAnagrams(string)).toEqual(result)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a string - exception when input type is invalid', () => {
      expect(() => findAnagrams()).toThrow('You need to pass a string')
      expect(() => findAnagrams([])).toThrow('You need to pass a string')
      expect(() => findAnagrams(['sdd'])).toThrow('You need to pass a string')
      expect(() => findAnagrams(true)).toThrow('You need to pass a string')
    })
  })
})
