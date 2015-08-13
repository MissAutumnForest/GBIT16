var bitwise = require('./bitwise');

var sameLength = function (bin1, bin2) {
  return (bin1.length === bin2.length);
};

var add = function (bin1, bin2) {
  if(sameLength(bin1, bin2)) {
    var len = bin1.length;
    var newBin = new Array(len);
    var carry = new Array(len);

    len = len - 1;
    for (; len >= 0; len-=1) {
      if(bin1[len] || bin2[len] || carry[len]) { // If any of the bits are high...
        if(((bin1[len] || bin2[len]) && carry[len]) || (bin1[len] && bin2[len])) { // Two of the three are high...
          newBin[len] = (bin1[len] && bin2[len] && carry[len]) ? 1 : 0;
          carry[len-1] = 1;
        } else {
          newBin[len] = 1;
        }
      } else {
        newBin[len] = 0;
      }
    }
    return newBin;
  } else {
    console.error('[Unequal Bit Size]', 'Both binary numbers must be the same bit size!');
  }
};

var toTwosCompliment = function (bin) {
  var one = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
  bin = bitwise.not(bin);
  return add(bin, one);
};

module.exports = {
   add: function (bin1, bin2) {
     return add(bin1, bin2);
   },

   sub: function (bin1, bin2) {
     return add(bin1, toTwosCompliment(bin2));
   }
}
