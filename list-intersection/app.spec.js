const { expect, describe, it } = require('@jest/globals')
const { listIntersection } = require('./app.js')

describe('Find all arrays intersections', () => {
  it('finds all arrays intersections', () => {
    const arr1 = ['dog', 'cat', 'egg']
    const arr2 = ['cat', 'dog', 'chicken']
    const result = [ 'dog', 'cat' ]

    expect(listIntersection(['dog', 'cat', 'egg'], ['cat', 'dog', 'chicken'])).toEqual(result)
  })
})