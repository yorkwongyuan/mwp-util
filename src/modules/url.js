module.exports = function (name) {
  let r
  if (window.location.search.includes(name)) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(/|&|$)", "i");
    r = window.location.search.substr(1).match(reg);
  } else {
    var reg = new RegExp("(^|&|#|\\/|\\?)" + name + "=([^&]*)(/|&|$)", "i");
    r = window.location.hash.substr(1).match(reg);
  }
  if (r != null) return unescape(r[2]); return null;
}