const { expect, describe, it } = require('@jest/globals')
const { sumPlusOne } = require('./app.js')

describe('#sum-of-array-plus-one', () => {
  describe('Valid arguments input', () => {
    it('sums all elements with valid input arguments', () => {
      expect(sumPlusOne([1, 2, 3, 4])).toEqual(14)
      expect(sumPlusOne([3.5, 4.5])).toEqual(10)
      expect(sumPlusOne([2])).toEqual(3)
      expect(sumPlusOne([])).toEqual(0)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You can sum numbers only - exception when input is an invalid array', () => {
      expect(() => sumPlusOne([1, 2, '3'])).toThrow('You can sum numbers only')
      expect(() => sumPlusOne([true])).toThrow('You can sum numbers only')
    })

    it('throws - You need to pass numbers in array - exception when input is not an array', () => {
      expect(() => sumPlusOne(5)).toThrow('You need to pass numbers in array')
      expect(() => sumPlusOne('h')).toThrow('You need to pass numbers in array')
      expect(() => sumPlusOne(true)).toThrow('You need to pass numbers in array')
    })
  })
})
