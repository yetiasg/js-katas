const { expect, describe, it } = require('@jest/globals')
const { isNumberPrime } = require('./app.js')

const primeNumbers = [
  2,  3,  5,  7, 11, 13,
 17, 19, 23, 29, 31, 37,
 41, 43, 47
]

describe('#prime-number', () => {
  describe('Valid arguments input', () => {
    const primeNumber = 13
    const notPrimeNumber = 20 

    const primes = []
    for(let i=0; i<=50; i++) {
      isNumberPrime(i) ? primes.push(i) : false
    }

    it('finds prime numbers on correct arguments', () => {
      expect(primes).toEqual(primeNumbers);
      expect(primes).not.toEqual([]);
      expect(isNumberPrime(primeNumber)).toBe(true)
      expect(isNumberPrime(notPrimeNumber)).not.toBe(true)
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
