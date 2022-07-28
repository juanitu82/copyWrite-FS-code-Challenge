const palindromo = (text) => {
  const invertedString = text.split('').reverse().join('')
  let flag = false
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== invertedString[i]) {
      flag = false
      break
    }
    else flag = true
  }
  return flag
}
module.exports = palindromo
