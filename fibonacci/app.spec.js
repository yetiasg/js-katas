const { expect, describe, it } = require('@jest/globals')
const { findFibonacci } = require('./app.js')

describe('Find fibonacci value for given index', () => {
  it('finds fibonacci value for given index', () => {
    const fibos =  [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765]

    fibos.forEach((el, i) => {
      expect(findFibonacci(i)).toEqual(el)
    })
  })
})
