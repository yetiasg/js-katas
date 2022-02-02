const { expect, describe, it } = require('@jest/globals')
const { findPairs } = require('./app.js')

describe('#array-pair-sum', () => {
  describe('Valid arguments input', () => {
    const options = [
      {val: 10, arr: [3, 4, 5, 5, 6, 7], result: [ [ 5, 5 ], [ 4, 6 ], [ 3, 7 ] ]},
      {val: 8, arr: [3, 4, 5, 4, 4, 3, 2], result: [ [ 3, 5 ], [ 4, 4 ] ]}
    ]

    it('finds all pairs of numbers which sum is equal to given number', () => {
      options.forEach(el => {
        expect(findPairs(el.val, el.arr)).toEqual(el.result)
      })
  
      expect(findPairs(14, [3, 4, 5, 5, 6, 7])).toEqual(false)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass an array with numbers - exception when input type is invalid', () => {
      expect(() => findPairs(14, [])).toThrow('You need to pass an array with numbers')
      expect(() => findPairs(14, [3, 4, '5', 5, 6, 7])).toThrow('You need to pass an array with numbers')
      expect(() => findPairs(14, true)).toThrow('You need to pass an array with numbers')
      expect(() => findPairs(14, '5')).toThrow('You need to pass an array with numbers')
      expect(() => findPairs(14)).toThrow('You need to pass an array with numbers')
    })

    it('throws - You need to pass number to find - exception when input type is invalid', () => {
      expect(() => findPairs('', [3, 4, 5, 5, 6, 7])).toThrow('You need to pass number to find')
      expect(() => findPairs('5', [3, 4, 5, 5, 6, 7])).toThrow('You need to pass number to find')
      expect(() => findPairs([], [3, 4, 5, 5, 6, 7])).toThrow('You need to pass number to find')
      expect(() => findPairs(true, [3, 4, 5, 5, 6, 7])).toThrow('You need to pass number to find')
    })
  })
})
