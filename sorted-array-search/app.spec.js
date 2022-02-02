const { expect, describe, it } = require('@jest/globals')
const { search } = require('./app.js')

const numbers = [
  1,   2,   3,   4,   5,   6,  23, 36,
  43,  45,  56,  63,  64,  67,  73, 77,
  245, 456, 523, 563, 624, 674, 678, 952
]

describe('Finding index of given number in array', () => {
  it('finds index in array of given number', () => {
    expect(search(245, numbers)).toEqual(16)
    expect(search(1500, numbers)).toBe(false)
    expect(search(245)).toBe(false)
    expect(search(245, [])).toBe(false)
    expect(search(245, 'numbers')).toEqual('You need to pass an array with numbers')
    expect(search(245, true)).toEqual('You need to pass an array with numbers')
    expect(search(245, 5)).toEqual('You need to pass an array with numbers')
    expect(search('245', numbers)).toEqual('You need to pass number to find')
    expect(search('', numbers)).toEqual('You need to pass number to find')
    expect(search([], numbers)).toEqual('You need to pass number to find')
    expect(search(true, numbers)).toEqual('You need to pass number to find')
  })
})
