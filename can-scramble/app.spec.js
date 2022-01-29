const { expect, describe, it } = require('@jest/globals')
const { canScramble } = require('./app.js')

describe('Given word can be reshape to second given word', () => {
  it('Check if given word can be reshape to second given word', () => {
    expect(canScramble('123', '312')).toEqual(true)
    expect(canScramble('123', '324')).toEqual(false)
    expect(canScramble('123', '3244')).toEqual(false)
    expect(canScramble('', '')).toEqual(true)
  })
})

