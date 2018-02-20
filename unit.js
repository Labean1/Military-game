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
