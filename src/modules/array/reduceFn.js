module.exports = function (callback) {
  return function (array) {
    return array.reduce((left, right) => {
      return callback(left, right)
    })
  }
}