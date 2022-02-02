const { expect, describe, it } = require('@jest/globals')
const { findElement } = require('./app.js')

describe('#findElement', () => {
  const arr =  [3, 1, 2, 1, 4]
  describe('Valid arguments input', () => {

    it('finds kth largest element in array', () => {
      expect(findElement(3, arr)).toEqual(2)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a number - exception when input is invalid', () => {
      expect(() => findElement([], arr)).toThrow('You need to pass a number')
      expect(() => findElement(true, arr)).toThrow('You need to pass a number')
      expect(() => findElement('3', arr)).toThrow('You need to pass a number')
    })

    it('throws - You need to pass an array with numbers - exception when input array is not valid', () => {
      expect(() => findElement(3)).toThrow('You need to pass an array with numbers')
      expect(() => findElement(3, [])).toThrow('You need to pass an array with numbers')
      expect(() => findElement(4, true)).toThrow('You need to pass an array with numbers')
      expect(() => findElement(5, 'arr')).toThrow('You need to pass an array with numbers')
      expect(() => findElement(5, 2)).toThrow('You need to pass an array with numbers')
    })

    it('throws - Bad position - exception when position value is out of array scope', () => {
      expect(() => findElement(7, arr)).toThrow('Bad position')
    })
  })
})
