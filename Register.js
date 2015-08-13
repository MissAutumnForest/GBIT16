var ErrorService = require('./services/ErrorService.js');

module.exports = function () {
  // Where we actually hold the data;
  var XX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  return {
    // Get full 16 bits of register
    getX: function () {
      return XX;
    },

    // Set full 16 bits of register
    setX: function (bin) {
      if(bin.length == 16) {
        XX = bin;
      } else { ErrorService.UnequalBitSize(); }
    },

    // Get high bits of register
    getH: function () {
      return XX.slice(0, 8);
    },

    // Get low bits of register
    getL: function () {
      return XX.slice(9, 16);
    },

    // Set high bits of register
    setH: function (bin) {
      if(bin.length == 8) {
        XX = bin.concat(getL());
      } else { ErrorService.UnequalBitSize(); }
    },

    // Set low bits of register
    setL: function (bin) {
      if(bin.length == 8) {
        var high = getH();
        XX = high.concat(bin);
      } else { ErrorService.UnequalBitSize(); }
    }
  }
};
