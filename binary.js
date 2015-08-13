var bitwise = require('./bitwise.js');
var math    = require('./math.js');

module.exports = {
  and: function (bin1, bin2) {
    return bitwise.and(bin1, bin2);
  },

  or: function (bin1, bin2) {
    return bitwise.or(bin1, bin2);
  },

  not: function (bin) {
    return bitwise.not(bin);
  },

  xor: function (bin1, bin2) {
    return bitwise.xor(bin1, bin2);
  },

  shiftLeft: function (bin) {
    return bitwise.shiftLeft(bin);
  },

  shiftRight: function (bin) {
    return bitwise.shiftRight(bin);
  },

  // Maths Stuffs
  add: function (bin1, bin2) {
    return math.add(bin1, bin2);
  },

  sub: function (bin1, bin2) {
    return math.sub(bin1, bin2);
  }
}
