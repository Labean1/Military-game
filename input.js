module.exports = (function(){
var newResourceKnight = new militaryResource("knight", 100, 200, 20);
var newResourceArcher = new militaryResource("archer", 50, 150, 30);
console.log(newResourceKnight)
console.log(newResourceArcher);
var newSquad1 = new squad([newResourceArcher, newResourceArcher, newResourceArcher, newResourceKnight]);
var newSquad2 = new squad([newResourceKnight, newResourceKnight, newResourceKnight, newResourceKnight]);
console.log(newSquad1);
console.log(newSquad2);});