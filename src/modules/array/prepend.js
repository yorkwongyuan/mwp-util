module.exports = function(array, ...element) {
  array.unshift(...element)
  return array
}