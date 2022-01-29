const { expect, describe, it } = require('@jest/globals')
const { findElement } = require('./app.js')

describe('Kth largest element in array', () => {
  it('finds kth largest element in array', () => {
    const arr =  [3, 1, 2, 1, 4]
    const k = 3
    const result = 2

    expect(findElement(k, arr)).toEqual(2)
  })
})