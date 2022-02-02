const { expect, describe, it } = require('@jest/globals')
const { isNumberPrime } = require('./app.js')

const primeNumbers = [
  2,  3,  5,  7, 11, 13,
 17, 19, 23, 29, 31, 37,
 41, 43, 47
]

describe('#isNumberPrime', () => {
  describe('Valid arguments input', () => {
    it('finds prime numbers', () => {
      expect(isNumberPrime(13)).toBe(true)
    })
    it('detects nonpirme number', () => {

      expect(isNumberPrime(20)).not.toBe(true)
    })

    it('can be used to filter prime numbers', () => {
      const primes = []
      for(let i=0; i<=50; i++) {
        isNumberPrime(i) ? primes.push(i) : false
      }

      expect(primes).toEqual(primeNumbers);
      expect(primes).not.toEqual([]);
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a number -  exception when input is invalid', () => {
      expect(() => isNumberPrime('sasda')).toThrow('You need to pass a number')
      expect(() => isNumberPrime(true)).toThrow('You need to pass a number')
      expect(() => isNumberPrime()).toThrow('You need to pass a number')
      expect(() => isNumberPrime([])).toThrow('You need to pass a number')
      expect(() => isNumberPrime('23')).toThrow('You need to pass a number')
    })
  })
})
