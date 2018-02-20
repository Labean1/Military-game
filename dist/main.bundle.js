/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports =(function militaryResource(type,health,distance,damage){
	this.type = type;
	this.health = this.maxHealth = health;
	this.damage = damage;
	this.distance = this.maxDistance = distance;
})

militaryResource.prototype.isReadyToMove = function (distance){
	return distance <= this.distance;
}
militaryResource.prototype.isReadyToFight = function (damage){
	return damage < this.health;
}
militaryResource.prototype.restore = function (){
	this.health = this.maxHealth;
	this.distance = this.maxDistance;
}
militaryResource.prototype.clone = function(){
	return new MilitaryResource(this.type, this.maxHealth,this.maxDistance);
}
militaryResource.prototype.change = function(anotherMilitary){
	var typeTemp = this.type;
	var healthTemp = this.health;
	var maxHealthTemp = this.maxHealth;
	var distanceTemp = this.distance;
	var maxDistance = this.maxDistance;
	this.type = anotherMilitary.type;
	this.health = anotherMilitary.health;
	this.maxHealth = anotherMilitary.maxHealth;
	this.distance = anotherMilitary.distance;
	this.maxDistance = anotherMilitary.maxDistance;
	anotherMilitary.type = 	typeTemp;
	anotherMilitary.health = healthTemp;
	anotherMilitary.maxHealth = maxHealthTemp;
	anotherMilitary.distance = 	distanceTemp ;
	anotherMilitary.maxDistance = maxDistanceTemp;
}
militaryResource.prototype.attackedBy = function(damage){
	if ((this.health-=damage)<=0)
		return "dead";
	else
		return this.health-=damage;
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (function squad(defaultResource){
	this.squad = [];
	if(defaultResource)
		this.combineResources(defaultResource);
});

squad.prototype.combineResources = function(resurcesToСombine){
	this.squad=this.squad.concat(resurcesToСombine);
}
squad.prototype.restore = function(){
	this.squad.forEach(function(unit){
		unit.restore();
	})
}
squad.prototype.isReadyToMove = function(){
	this.squad.forEach(function(unit){
		unit.isReadyToMove();
	})
}
squad.prototype.isReadyToFight = function(){
	this.squad.forEach(function(unit){
		unit.isReadyToMove();
	})
}
squad.prototype.clone = function(){
	this.squad.forEach(function(unit){
		unit.clone();
	})
}
	/*Squad.prototype.attackedBy = function(){
		this.squad.forEach(function(unit){
			unit.attackedBy();
		})
	}*/



	










/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = (function(){
var land = document.createElement("div"),
    field = document.createElement("div"),
    scoreBoard = document.createElement("div"),
    listOfWarriors = document.createElement("div");
    

    land.classList.add("land");
    listOfWarriors.classList.add("list");
    field.classList.add("field");
    scoreBoard.classList.add("score");

    scoreBoard.innerHTML = "scoreBoard";
    
    for(i=0;i<80;i++){
       var fieldCell = document.createElement("div");
        fieldCell.classList.add("fieldCell");
        fieldCell.innerHTML = i;
        field.appendChild(fieldCell);
    }
     

newSquad1.squad.forEach(function(res) {
    var warriorBlock=document.createElement("div"),
        warriorTitel=document.createElement("div"),
        warriorBody=document.createElement("ul");


    warriorBlock.classList.add("warrior");

    warriorTitel.classList.add("warrior-list");
    warriorTitel.innerHTML = res.type;

    warriorBody.classList.add("warrior-body")


   for (var key in res){
    if(res.hasOwnProperty(key)) {
        var liElement = document.createElement("li");
         liElement.innerHTML = key + ": " + res[key];
        warriorBody.appendChild(liElement);
    }
    }

    warriorBlock.appendChild(warriorTitel);
    warriorBlock.appendChild(warriorBody);

    listOfWarriors.appendChild(warriorBlock);

 
});
    land.appendChild(listOfWarriors);
    land.appendChild(field);
    land.appendChild(scoreBoard); 
    container.appendChild(land);});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = (function(){
var newResourceKnight = new militaryResource("knight", 100, 200, 20);
var newResourceArcher = new militaryResource("archer", 50, 150, 30);
console.log(newResourceKnight)
console.log(newResourceArcher);
var newSquad1 = new squad([newResourceArcher, newResourceArcher, newResourceArcher, newResourceKnight]);
var newSquad2 = new squad([newResourceKnight, newResourceKnight, newResourceKnight, newResourceKnight]);
console.log(newSquad1);
console.log(newSquad2);});

	/*function kill(){
		var timerId = setInterval(function() {
			if(Math.ceil(Math.random()=1)){
  				newSquad1.Math.ceil(Math.random()*4).attackedBy(newSquad2.Math.ceil(Math.random()*4).damage);
  				console.log(newSquad1);
				console.log(newSquad2);
			}
  			else{
  				newSquad2.Math.ceil(Math.random()*4).attackedBy(newSquad1.Math.ceil(Math.random()*4).damage);
  				console.log(newSquad1);
				console.log(newSquad2);
			}
		}, Math.ceil(Math.random()*4));
	}*/



/***/ })
/******/ ]);