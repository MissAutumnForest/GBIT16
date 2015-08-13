module.exports = {
  code2key: function (bin, enums) {
    var key;

    for(key in enums) {
      if(enums[key] === bin) {
        return key;
        break;
      }
    }
  }
}
