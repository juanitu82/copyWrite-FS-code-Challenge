const palindromo = require('./palindromo')

module.exports = (req, res) => {
  const { text } = req.query
  if (!text) {
    return res.status(400).json({
      data: 'no text'
    })
  }
  const data = text.split('').reverse().join('')

  res.json({
    palindromo: palindromo(text),
    data
  })
}
