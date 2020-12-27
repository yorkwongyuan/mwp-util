let lib = {}
const files = require.context('./modules', false, /\.js$/);
files.keys().forEach(key => {
  console.log(key, 'key1')
  let value = files(key)
  let name = key.slice(2, -3)
  lib[name] = value
})
console.log(lib, 'lib')
module.exports = lib
