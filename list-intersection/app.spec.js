const { expect, describe, it } = require('@jest/globals')
const { listIntersection } = require('./app.js')

describe('Find all arrays intersections', () => {
  it('finds all arrays intersections', () => {
    const result = [ 'dog', 'cat' ] || [ 'cat' , 'dog']

    expect(listIntersection(['dog', 'cat', 'egg'], ['cat', 'dog', 'chicken'])).toEqual(result)
    expect(listIntersection(['dog', 'cat', 'egg'], ['cat', 'dog', 'chicken'])).toEqual(result)
    expect(listIntersection([], ['cat', 'dog', 'chicken'])).toEqual('You need to pass an array')
    expect(listIntersection('cat', ['cat', 'dog', 'chicken'])).toEqual('You need to pass an array')
    expect(listIntersection(45, ['cat', 'dog', 'chicken'])).toEqual('You need to pass an array')
    expect(listIntersection(true, ['cat', 'dog', 'chicken'])).toEqual('You need to pass an array')

    expect(listIntersection(['dog', 'cat', 'egg'], [])).toEqual('You need to pass an array')
    expect(listIntersection(['dog', 'cat', 'egg'], 'cat')).toEqual('You need to pass an array')
    expect(listIntersection(['dog', 'cat', 'egg'], 45)).toEqual('You need to pass an array')
    expect(listIntersection(['dog', 'cat', 'egg'], true)).toEqual('You need to pass an array')

  })
})