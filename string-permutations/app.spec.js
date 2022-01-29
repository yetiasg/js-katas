const { expect, describe, it } = require('@jest/globals')
const { findAnagrams } = require('./app.js')

describe('Test finding anagrams', () => {
  it('finds all possible anagrams from given string', () => {
    const string = 'ABC'
    const result = [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]
    const failResult = [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA', 'ABC' ]
    expect(findAnagrams(string)).toEqual(result)
    expect(findAnagrams(string)).not.toEqual(failResult)
    expect(findAnagrams(string)).not.toEqual([])
  })
})
