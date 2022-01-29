const { expect, describe, it } = require('@jest/globals')
const { sumOfMultiples } = require('./app.js')

describe('Find and sum all multiples for 3 and/or 5 for given number', () => {
  it('finds and sums all multiples for 3 and/or 5 for given number', () => {
    expect(sumOfMultiples([3, 5], 10)).toEqual(23);
    expect(sumOfMultiples([5], 10)).toEqual(5);
    expect(sumOfMultiples([3], 10)).toEqual(18);
  })
})