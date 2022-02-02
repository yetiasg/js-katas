const { expect, describe, it } = require('@jest/globals')
const { isNumberPrime } = require('./app.js')

const primeNumbers = [
  2,  3,  5,  7, 11, 13,
 17, 19, 23, 29, 31, 37,
 41, 43, 47
]

describe('Checking if given number is a prime number', () => {
  it('find sout if number is prime', () => {
    const primeNumber = 13
    const notPrimeNumber = 20 

    const primes = []
    for(let i=0; i<=50; i++) {
      isNumberPrime(i) ? primes.push(i) : false
    }

    expect(primes).toEqual(primeNumbers);
    expect(primes).not.toEqual([]);
    expect(isNumberPrime(primeNumber)).toBe(true)
    expect(isNumberPrime(notPrimeNumber)).not.toBe(true)
    expect(isNumberPrime('notPrimeNumber')).toEqual('You need to pass a number')
    expect(isNumberPrime(true)).toEqual('You need to pass a number')
    expect(isNumberPrime()).toEqual('You need to pass a number')
    expect(isNumberPrime([])).toEqual('You need to pass a number')
    expect(isNumberPrime('23')).toEqual('You need to pass a number')
  })
})
