const { expect, describe, it } = require('@jest/globals')
const { findLongestWords } = require('./app.js')

describe('Find all different  longest words', () => {
  it('finds all different longest words', () => {

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

    options.forEach((_, i) => {
      expect(findLongestWords(options[i].sentence)).toEqual((options[i].result));
      expect(findLongestWords(options[i].sentence)).not.toEqual(([]));
    })

    expect(findLongestWords()).toEqual('You need to pass a string sentence');
    expect(findLongestWords([])).toEqual('You need to pass a string sentence');
    expect(findLongestWords(323)).toEqual('You need to pass a string sentence');
    expect(findLongestWords(true)).toEqual('You need to pass a string sentence');
  })
})