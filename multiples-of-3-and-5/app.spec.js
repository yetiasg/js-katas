const { expect, describe, it } = require('@jest/globals')
const { sumOfMultiples } = require('./app.js')

describe('#multiples-of-3-and-5', () => {
  describe('Valid arguments input', () => {
    it('find and sum all multiples for 3 and/or 5 for given number', () => {
      expect(sumOfMultiples([3, 5], 10)).toEqual(23);
      expect(sumOfMultiples([5], 10)).toEqual(5);
      expect(sumOfMultiples([3], 10)).toEqual(18);
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass an array with numbers - exception when input type is invalid', () => {
      expect(() => sumOfMultiples([], 10)).toThrow('You need to pass an array with numbers');
      expect(() => sumOfMultiples([true], 10)).toThrow('You need to pass an array with numbers');
      expect(() => sumOfMultiples('5', 10)).toThrow('You need to pass an array with numbers');
    })

    it('throws - You need to pass number -  exception when input type is invalid', () => {
      expect(() => sumOfMultiples([3], '10')).toThrow('You need to pass number');
      expect(() => sumOfMultiples([3])).toThrow('You need to pass number');
      expect(() => sumOfMultiples([3], [])).toThrow('You need to pass number');
      expect(() => sumOfMultiples([3], true)).toThrow('You need to pass number');
    })
  })
})
