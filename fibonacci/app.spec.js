const { expect, describe, it } = require('@jest/globals')
const { findFibonacci } = require('./app.js')

describe('#findFibonacci', () => {
  describe('Valid arguments input', () => {
    it('finds fibonacci value for given index', () => {
      const fibos =  [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]

      fibos.forEach((el, i) => {
        expect(findFibonacci(i)).toEqual(el)
      })
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a number - exception when input type is invalid', () => {
      expect(() => findFibonacci('6')).toThrow('You need to pass a number')
      expect(() => findFibonacci([])).toThrow('You need to pass a number')
      expect(() => findFibonacci(true)).toThrow('You need to pass a number')
    })

    it('throws - You need to pass a number - exception when input is not provided', () => {
      expect(() => findFibonacci()).toThrow('You need to pass a number')
    })

    it('throws - Bad position -  exception when input is negative', () => {
      expect(() => findFibonacci(-1)).toThrow('Bad position')
    })
  })
})
