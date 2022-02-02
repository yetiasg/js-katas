const { expect, describe, it } = require('@jest/globals')
const { countClosedLoops } = require('./app.js')

describe('#closed-loops', () => {
  describe('Valid arguments input', () => {
    const options =  [
      {num: 6886, loops: 6},
      {num: 2876, loops: 3},
      {num: 8888, loops: 8}
    ]

    it('ounts all loops in given number', () => {
      options.forEach(el => {
        expect(countClosedLoops(el.num)).toEqual(el.loops)
      })
      expect(countClosedLoops(0)).toEqual(0)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a number - exception when input type is invalid', () => {
      expect(() => countClosedLoops()).toThrow('You need to pass a number')
      expect(() => countClosedLoops([])).toThrow('You need to pass a number')
      expect(() => countClosedLoops('8')).toThrow('You need to pass a number')
      expect(() => countClosedLoops(true)).toThrow('You need to pass a number')
    })
  })
})
