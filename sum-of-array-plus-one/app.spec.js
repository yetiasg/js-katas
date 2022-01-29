const { expect, describe, it } = require('@jest/globals')
const { sumPlusOne } = require('./app.js')

describe('Test summing all elements in array with addition of 1 to each element', () => {
  it('sums all elements with addition of 1 to each element', () => {
    const numbers = [1, 2, 3, 4]    //10 + 4 (elements)
    expect(sumPlusOne(numbers)).toEqual(14)
    expect(sumPlusOne(numbers)).not.toEqual(10)
  })
})