const { expect, describe, it } = require('@jest/globals')
const { findElement } = require('./app.js')

describe('Kth largest element in array', () => {
  it('finds kth largest element in array', () => {
    const arr =  [3, 1, 2, 1, 4]

    expect(findElement(3, arr)).toEqual(2)
    
    expect(findElement([], arr)).toEqual('You need to pass a number')
    expect(findElement(true, arr)).toEqual('You need to pass a number')
    expect(findElement('3', arr)).toEqual('You need to pass a number')
    expect(findElement(7, arr)).toEqual('Bad position')

    expect(findElement(3)).toEqual('You need to pass an array with numbers')
    expect(findElement(3, [])).toEqual('You need to pass an array with numbers')
    expect(findElement(4, true)).toEqual('You need to pass an array with numbers')
    expect(findElement(5, 'arr')).toEqual('You need to pass an array with numbers')
    expect(findElement(5, 2)).toEqual('You need to pass an array with numbers')
  })
})