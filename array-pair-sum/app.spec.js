const { expect, describe, it } = require('@jest/globals')
const { findPairs } = require('./app.js')

describe('Pairs of numbers which sum is equal to given number', () => {
  it('finds all pairs of numbers which sum is equal to given number', () => {
    const options = [
      {val: 10, arr: [3, 4, 5, 5, 6, 7], result: [ [ 5, 5 ], [ 4, 6 ], [ 3, 7 ] ]},
      {val: 8, arr: [3, 4, 5, 4, 4, 3, 2], result: [ [ 3, 5 ], [ 4, 4 ] ]}
    ]

    options.forEach(el => {
      expect(findPairs(el.val, el.arr)).toEqual(el.result)
    })

  })
})