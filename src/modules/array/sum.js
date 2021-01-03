module.exports = function (array) {
  return array.reduce((left, right) => {
    return left + right
  })
}