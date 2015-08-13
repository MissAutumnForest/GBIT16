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
      // TODO: Write a switch that checks for each instruction.
      // TODO: Also write a function that gets all the pieces for you from
      //       the raw binary and Returns a nice object with exactly what
      //       you need.

      // Console log our program counter and all general registers for testing.
      console.log('PC:', reg.PC.getX());
      console.log('AX:', reg.AX.getX());
      console.log('BX:', reg.BX.getX());
      console.log('CX:', reg.CX.getX());
      console.log('DX:', reg.DX.getX());
      console.log('-----------------------------------------------------');

      // Increment the Program Counter.
      reg.PC.setX(binary.add(reg.PC.getX(), [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]));

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
