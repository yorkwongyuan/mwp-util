module.exports = function(array, index, ...element) {
  array.splice(index, 0, ...element)
  return array
}