const { expect, describe, it } = require('@jest/globals')
const { findLongestWords } = require('./app.js')

describe('#longest-words', () => {
  describe('Valid arguments input', () => {
    const options = [
      {
        sentence: "You are just an old antidisestablishmentarian",
        result: ["antidisestablishmentarian"]
      },
      {
        sentence: "I gave a present to my parents",
        result :["present", "parents"]
      },
      {
        sentence: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo",
        result: ["Buffalo", "buffalo"]
      }
    ]

    it('finds all different longest words', () => {
      options.forEach((_, i) => {
        expect(findLongestWords(options[i].sentence)).toEqual((options[i].result));
        expect(findLongestWords(options[i].sentence)).not.toEqual(([]));
      })
    })
  })

  describe('Invalid arguments input', () => {
    it('throws - You need to pass a string sentence - exception when input is invalid', () => {
      expect(() => findLongestWords()).toThrow('You need to pass a string sentence');
      expect(() => findLongestWords([])).toThrow('You need to pass a string sentence');
      expect(() => findLongestWords(323)).toThrow('You need to pass a string sentence');
      expect(() => findLongestWords(true)).toThrow('You need to pass a string sentence');
    })
  })
})
