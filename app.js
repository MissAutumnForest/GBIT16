var binary = require('./binary.js');
var gb = require('./gbit16.js');

// TODO: Add more comments to the code so that others can understand better.

// Initializing gbit16 and loading in ROM;
var gbit16 = gb([
  0,1,1,1, 0,0,0,1, 0,0,0,0, 0,1,0,1,
  0,1,1,1, 0,1,0,0, 0,0,0,0, 0,0,1,1,
  1,0,0,0, 0,0,0,0, 0,0,1,1, 1,0,0,1
]);

gbit16.init();

// Cycle once every second.
var cpu = setInterval(gbit16.tick, 500);

console.log("GBIT-16 Emulator Started!");
