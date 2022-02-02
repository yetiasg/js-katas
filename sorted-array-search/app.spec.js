const { expect, describe, it } = require('@jest/globals')
const { search } = require('./app.js')

const numbers = [
  1,   2,   3,   4,   5,   6,  23, 36,
  43,  45,  56,  63,  64,  67,  73, 77,
  245, 456, 523, 563, 624, 674, 678, 952
]

describe('#sorted-array-search', () => {
  describe('Valid arguments input', () => {
    it('finds index in array of given number', () => {
      expect(search(245, numbers)).toEqual(16)
      expect(search(1500, numbers)).toBe(false)
      expect(search(245)).toBe(false)
      expect(search(245, [])).toBe(false)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass an array with numbers - exception when input is not valid array', () => {
      expect(() => search(245, 'numbers')).toThrow('You need to pass an array with numbers')
      expect(() => search(245, true)).toThrow('You need to pass an array with numbers')
      expect(() => search(245, 5)).toThrow('You need to pass an array with numbers')
    })

    it('throws - You need to pass number to find - exception when input is invalid', () => {
      expect(() => search('245', numbers)).toThrow('You need to pass number to find')
      expect(() => search('', numbers)).toThrow('You need to pass number to find')
      expect(() => search([], numbers)).toThrow('You need to pass number to find')
      expect(() => search(true, numbers)).toThrow('You need to pass number to find')
    })
  })
})
