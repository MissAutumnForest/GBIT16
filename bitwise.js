var sameLength = function (bin1, bin2) {
  return (bin1.length === bin2.length);
};

module.exports = {
  and: function (bin1, bin2) {
    if(sameLength(bin1, bin2)) {
      var len = bin1.length;
      var newBin = new Array(len);

      len = len - 1;
      for (; len >= 0; len-=1) {
        newBin[len] = (bin1[len] && bin2[len]) ? 1 : 0;
      }
      return newBin;
    } else {
      console.error('[Unequal Bit Size]', 'Both binary numbers must be the same bit size!');
    }
  },

  or: function (bin1, bin2) {
    if(sameLength(bin1, bin2)) {
      var len = bin1.length;
      var newBin = new Array(len);

      len = len - 1;
      for (; len >= 0; len-=1) {
        newBin[len] = (bin1[len] || bin2[len]) ? 1 : 0;
      }
      return newBin;
    } else {
      console.error('[Unequal Bit Size]', 'Both binary numbers must be the same bit size!');
    }
  },

  not: function (bin) {
    var len = bin.length;

    len = len - 1;
    for(; len >= 0; len-=1) {
      bin[len] = !(bin[len]) ? 1 : 0;
    }
    return bin;
  },

  xor: function (bin1, bin2) {
    if(sameLength(bin1, bin2)) {
      var len = bin1.length;
      var newBin = new Array(len);

      len = len - 1;
      for (; len >= 0; len-=1) {
        newBin[len] = (bin1[len] ^ bin2[len]) ? 1 : 0;
      }
      return newBin;
    } else {
      console.error('[Unequal Bit Size]', 'Both binary numbers must be the same bit size!');
    }
  },

  shiftLeft: function (bin) {
    var len = bin.length;
    var i = 0;

    for (; i < len; i+=1) {
      bin[i] = bin[i+1] || 0;
    }

    return bin;
  },

  shiftRight: function (bin) {
    var len = bin.length;

    len = len - 1;
    for(; len >= 0; len-=1) {
      bin[len] = bin[len-1] || 0;
    }

    return bin;
  }
}
