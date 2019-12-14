// Truncates a string to the specified length without splitting up words.
export function truncateOnWord(str, len) {
  let trimmable =
    '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF'
  let reg = new RegExp('(?=[' + trimmable + '])')
  let words = str.split(reg)
  let count = 0
  return words
    .filter(function(word) {
      count += word.length
      return count <= len
    })
    .join('')
    .concat('...')
}
