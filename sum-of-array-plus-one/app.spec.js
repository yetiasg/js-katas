const { expect, describe, it } = require('@jest/globals')
const { sumPlusOne } = require('./app.js')

describe('Test summing all elements in array with addition of 1 to each element', () => {
  it('sums all elements with addition of 1 to each element', () => {
    expect(sumPlusOne([1, 2, 3, 4])).toEqual(14)
    expect(sumPlusOne([3.5, 4.5])).toEqual(10)
    expect(sumPlusOne([2])).toEqual(3)
    expect(sumPlusOne([])).toEqual(0)
    expect(sumPlusOne([1, 2, '3'])).toEqual('You can sum numbers only')
    expect(sumPlusOne(5)).toEqual('You need to pass numbers in array')
    expect(sumPlusOne('h')).toEqual('You need to pass numbers in array')
    expect(sumPlusOne([true])).toEqual('You can sum numbers only')
  })
})
