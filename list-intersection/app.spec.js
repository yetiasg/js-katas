const { expect, describe, it } = require('@jest/globals')
const { listIntersection } = require('./app.js')

describe('#list-intersection', () => {
  describe('Valid arguments input', () => {
    const result = [ 'dog', 'cat' ].sort()

    it('finds all arrays intersections', () => {
      expect(listIntersection(['dog', 'cat', 'egg'], ['cat', 'dog', 'chicken'])).toEqual(result)
      expect(listIntersection([ 'cat', 'dog', 'egg'], ['cat', 'dog', 'chicken'])).toEqual(result)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws -You need to pass an array - exception when input is invalid', () => {
      expect(() => listIntersection([], ['cat', 'dog', 'chicken'])).toThrow('You need to pass an array')
      expect(() => listIntersection('cat', ['cat', 'dog', 'chicken'])).toThrow('You need to pass an array')
      expect(() => listIntersection(45, ['cat', 'dog', 'chicken'])).toThrow('You need to pass an array')
      expect(() => listIntersection(true, ['cat', 'dog', 'chicken'])).toThrow('You need to pass an array')
  
      expect(() => listIntersection(['dog', 'cat', 'egg'], [])).toThrow('You need to pass an array')
      expect(() => listIntersection(['dog', 'cat', 'egg'], 'cat')).toThrow('You need to pass an array')
      expect(() => listIntersection(['dog', 'cat', 'egg'], 45)).toThrow('You need to pass an array')
      expect(() => listIntersection(['dog', 'cat', 'egg'], true)).toThrow('You need to pass an array')
    })
  })
})
