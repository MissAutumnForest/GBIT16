var en = require('./enum.js');
var ErrorService = require('./services/ErrorService.js');
var util = require('./util.js');
var binary = require('./binary.js');
var Register = require('./Register.js');

var RAMFromROM = function (ROM) {
  var RAM = new Array((65536 * 8));
  var len = ROM.length;
  var i = 0;

  if(len <= RAM.length) {
    for(; i < len; i+=1) {
      RAM[i] = ROM[i];
    }

    return RAM;
  } { ErrorService.UnequalBitSize() }
};

var decodeRegister = function (bin) {
  var flatBin = bin.join('');
  var key;

  for(key in en.reg) {
    if(en.reg[key] == flatBin) {
      return key;
    }
  }
};

var decodeInstruction = function (bin, type) {
  if(type == "ir1") {
    return {
      reg1: decodeRegister(bin.slice(4, 8)),
      val: bin.slice(8, 16)
    };
  } else if(type == "ir2") {
    return {
      reg1: decodeRegister(bin.slice(4, 8)),
      reg2: decodeRegister(bin.slice(12, 16))
    };
  } else if (type == 'ir3') {
    return {
      reg1: decodeRegister(bin.slice(4, 8)),
      reg2: decodeRegister(bin.slice(8, 12)),
      reg3: decodeRegister(bin.slice(12, 16))
    }
  } else {
    ErrorService.InvalidInstruction();
  }
}

module.exports = function (ROM) {
  var RAM = new RAMFromROM(ROM);

  var reg = {
    AX: new Register(),
    BX: new Register(),
    CX: new Register(),
    DX: new Register(),

    PC: new Register(),
    IP: new Register(),
    SP: new Register(),
    FG: new Register()
  };

  return {
    tick: function () {
      var inst = reg.IP.getH().slice(0, 3).join('');

      //TODO: Write instruction switch / if then else.

      // For testing purposes
      process.stdout.write("\u001b[2J\u001b[0;0H");
      console.log('PC:', reg.PC.getX().join(''));
      console.log('IP:', reg.IP.getX().join(''));
      console.log('AX:', reg.AX.getX().join(''));
      console.log('BX:', reg.BX.getX().join(''));
      console.log('CX:', reg.CX.getX().join(''));
      console.log('DX:', reg.DX.getX().join(''));

      // Increment the Program Counter.
      reg.PC.setX(binary.add(reg.PC.getX(), [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]));
      console.log(decodeInstruction(reg.IP.getX(), 'ir1'));

      // Load next command into Instruction Pointer.
      // TODO: You need to make a RAM interface first.
      //       Then you can actually get the next instruction.
    },

    init: function () {
      var firstInst = RAM.slice(0, 16);
      reg.IP.setX(firstInst); // Load first instruction (first 16 bits of RAM) into IP;
    }
  }
};
