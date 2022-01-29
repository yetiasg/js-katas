const { expect, describe, it } = require('@jest/globals')
const { countClosedLoops } = require('./app.js')

describe('Loops in number', () => {
  it('counts all loops in given number', () => {
    const options =  [
      {num: 6886, loops: 6},
      {num: 2876, loops: 3},
      {num: 8888, loops: 8}
    ]

    options.forEach(el => {
      expect(countClosedLoops(el.num)).toEqual(el.loops)
    })
  })
})