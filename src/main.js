let lib = {}
const files = require.context('./modules', true, /\.js$/);
files.keys().forEach(key => {
  console.log(key, 'key')
  if (key.split('/').length === 2) {
    let name = key.slice(2, -3)
    lib[name] = files(key)
  } else {
    let _key = key.slice(2, -3)
    let arr = _key.split('/')
    function rec (item={}) {
      let _item = arr.shift()
      if (arr.length === 0){
        item[_item] = files(key) || function(){console.log('没有任何东西')}
      } else {
        item[_item] = {}
        rec(item[_item])
      }
    }
    let obj = {}
    rec(obj)
    Object.keys(obj).forEach(item => {
      lib[item] = obj[item]
    })
  }
})
module.exports = lib

