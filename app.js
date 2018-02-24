var militaryResource = require("./unit.js");
var squad = require("./militarySquad.js");
var newResourceKnight = new militaryResource("knight", 100, 200, 20);
var newResourceArcher = new militaryResource("archer", 50, 150, 30);
var newSquad1 = new squad([newResourceArcher, newResourceArcher, newResourceArcher, newResourceKnight]);
var newSquad2 = new squad([newResourceKnight, newResourceKnight, newResourceKnight, newResourceKnight]);
console.log(newSquad1);
console.log(newSquad2);
module.exports = (newSquad1);
require("./test.js");
require("./styleMilitary.css");
