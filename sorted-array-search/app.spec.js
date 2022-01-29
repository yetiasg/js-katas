const { expect, describe, it } = require('@jest/globals')
const { search } = require('./app.js')

const numbers = [
  1,   2,   3,   4,   5,   6,  23, 36,
  43,  45,  56,  63,  64,  67,  73, 77,
  245, 456, 523, 563, 624, 674, 678, 952
]

describe('Finding index of given number in array', () => {
  it('finds index in array of given number', () => {
    const number = 245
    const result = 16
    const notExistingNumberInArray = 1500
    expect(search(number, numbers)).toEqual(result)
    expect(search(notExistingNumberInArray, numbers)).toBe(false)
  })
})
