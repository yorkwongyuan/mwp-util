module.exports = {
  append: function(array, ...element) {
    array.push(...element)
    return array
  },
  insert: function(array, index, ...element) {
    array.splice(index, 0, ...element)
    return array
  },
  prepend: function(array, ...element) {
    array.unshift(...element)
    return array
  },
  remove: function(array, index) {
    array.splice(index, 1)
    return array
  },
  sum: function (array) {
    return array.reduce((left, right) => {
      return left + right
    })
  },
  reduceFn: function (callback) {
    return function (array) {
      return array.reduce((left, right) => {
        return callback(left, right)
      })
    }
  }
}

// export function append (array, ...element) {
//   array.push(...element)
//   return array
// }
// export function insert (array, index, ...element) {
//   console.log('tree???')
//   array.splice(index, 0, ...element)
//   return array
// }
// export function prepend (array, ...element) {
//   array.unshift(...element)
//   return array
// }
// export function remove (array, index) {
//   array.splice(index, 1)
//   return array
// }
// export function sum (array) {
//   return array.reduce((left, right) => {
//     return left + right
//   })
// }
// export function reduceFn (callback) {
//   return function (array) {
//     return array.reduce((left, right) => {
//       return callback(left, right)
//     })
//   }
// }
// module.exports = {
//   append: require.ensure([], (require) => require('./arrayUtil/append'), 'append'),
//   insert: require.ensure([], (require) => require('./arrayUtil/insert'), 'insert')
// }
// module.exports = {
//   append: require('./arrayUtil/append'),
//   insert: require('./arrayUtil/insert')
// }