const { expect, describe, it } = require('@jest/globals')
const { findAnagrams } = require('./app.js')

describe('Test finding anagrams', () => {
  it('finds all possible anagrams from given string', () => {
    const string = 'ABC'
    const result = [ 'ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA' ]
    expect(findAnagrams(string)).toEqual(result)
    expect(findAnagrams(string)).not.toEqual('You need to pass a string')
    expect(findAnagrams()).toEqual('You need to pass a string')
    expect(findAnagrams([])).toEqual('You need to pass a string')
    expect(findAnagrams(['sdd'])).toEqual('You need to pass a string')
    expect(findAnagrams(true)).toEqual('You need to pass a string')
  })
})
