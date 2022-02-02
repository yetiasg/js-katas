const { expect, describe, it } = require('@jest/globals')
const { canScramble } = require('./app.js')

describe('#can-scramble', () => {
  describe('Valid arguments input', () => {
    it('checks if given word can be reshape to second given word', () => {
      expect(canScramble('123', '312')).toEqual(true)
      expect(canScramble('123', '324')).toEqual(false)
      expect(canScramble('123', '3244')).toEqual(false)
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a string - exception when input type is invalid', () => {
      expect(() => canScramble('', '')).toThrow('You need to pass a string')

      expect(() => canScramble('')).toThrow('You need to pass a string')
      expect(() => canScramble('', [])).toThrow('You need to pass a string')
      expect(() => canScramble('', true)).toThrow('You need to pass a string')
      expect(() => canScramble('', 8)).toThrow('You need to pass a string')
  
      expect(() => canScramble([], '')).toThrow('You need to pass a string')
      expect(() => canScramble(true, '')).toThrow('You need to pass a string')
      expect(() => canScramble(8, '')).toThrow('You need to pass a string')
    })    
  })
})
