const { expect, describe, it } = require('@jest/globals')
const { generatePermutatios } = require('./app.js')

describe('#generatePermutatios', () => {
  describe('Valid arguments input', () => {
    it('finds all possible permutations for given string', () => {
      expect(generatePermutatios('ABC')).toEqual([ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'])
    })

    it('returns single permutation if given string is a single sign', () => {
      expect(generatePermutatios('A')).toEqual([ 'A'])
    })

    it('returns not duplicateg permutations', () => {
      expect(generatePermutatios('ABC')).not.toEqual([ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA', 'ABC'])
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a string - exception when input type is invalid', () => {
      expect(() => generatePermutatios()).toThrow('You need to pass a string')
      expect(() => generatePermutatios([])).toThrow('You need to pass a string')
      expect(() => generatePermutatios(['sdd'])).toThrow('You need to pass a string')
      expect(() => generatePermutatios(true)).toThrow('You need to pass a string')
    })
  })
})
