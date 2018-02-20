function squad(defaultResource){
	this.squad = [];
	if(defaultResource)
		this.combineResources(defaultResource);
}

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



	








