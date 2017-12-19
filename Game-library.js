function getName(){
	var nameTemp = prompt("name of your unit");
	return(nameTemp);
};
function getNumber(){
	var numberTemp = prompt("number of your units");
	return(numberTemp);
};
function getHP(){
	var HPTemp = prompt("HP of your unit");
	return(HPTemp);
};
function getMaxDistance(){
	var maxDistanceTemp = prompt("the distance your unit can pass");
	return(maxDistanceTemp);
};
function getDistance(){
	var DistanceTemp = prompt("the distance your unit will pass today");
	return(DistanceTemp);
};
function getSourceNumber(){
	var sourceNumberTemp = prompt("number of your unit");
	return(sourceNumberTemp);
};
function getSourceNumberMove(){
	var sourceNumberTemp = prompt("number of unit, you will move");
	return(sourceNumberTemp);
};
function getSourceNumberClone(){
	var sourceNumberTemp = prompt("number of unit, you will clone");
	return(sourceNumberTemp);
};
function getSourceNumberRelocation(){
	var sourceNumberTemp = prompt("number of unit, you will relocate");
	return(sourceNumberTemp);
};
function getSourceNumberHeal(){
	var sourceNumberTemp = prompt("number of unit, you will heal");
	return(sourceNumberTemp);
};
function getSourceNumberRelax(){
	var sourceNumberTemp = prompt("number of unit, you will recharge");
	return(sourceNumberTemp);
};
function getDamage(){
	var damage = prompt("number of your unit");
	return(damage);
};
function showMessageConsole(answer){
	console.log(answer);
};
function showMessageAlert(answer){
	alert(answer);
};



function copyObj(objTemp){
	var newObj={};
	for (var key in objTemp){
			newObj[key]=objTemp[key];
	};
	return(newObj);
}



var arr = [];



function getNewMilitary(name,number,maxHP,HP,maxDistance,realTimeDistance){	
	name=getName();
	number=Number(getNumber());
	maxHP=Number(getHP());
	HP=maxHP;
	maxDistance=Number(getMaxDistance());
	realTimeDistance=maxDistance;

	var newMilitary = {
		"name":name,
		"number":number,
		"maxHP":maxHP,
		"HP":HP,
		"maxDistance":maxDistance,
		"realTimeDistance":realTimeDistance
		};

	for(var temp=0;temp<number;temp++){
		var newMilitaryTemp = copyObj(newMilitary)
		newMilitaryTemp.number=temp;
		arr.push(newMilitaryTemp);
	}
//console.log(arr);  
}
function checkDistance(dayDistance){
	dayDistance= getDistance();
	var sourceNumber = getSourceNumberMove();
	if(arr[Number(sourceNumber)].realTimeDistance>=dayDistance){
	arr[Number(sourceNumber)].realTimeDistance-=dayDistance;
	showMessageConsole(arr[Number(sourceNumber)].realTimeDistance);
	}
	else{
	showMessageAlert("Error,try again");
	checkDistance(dayDistance);
	}
}
function heal(sourceNumber){
	sourceNumber=getSourceNumberHeal();
	arr[Number(sourceNumber)].HP=arr[Number(sourceNumber)].maxHP;
}
function realx(sourceNumber){
	sourceNumber=getSourceNumberRelax();
	arr[Number(sourceNumber)].realTimeDistance=arr[Number(sourceNumber)].maxDistance;
}
/*function checkDistanceForAll(dayDistance){
	dayDistance= getDistance();
	const newDayDistance = arr.filter(military => arr.realTimeDistance >= dayDistance); //error!!!!!!!!!!!!!!!!!!!!
	showMessageConsole(newDayDistance);
}*/
function contactArray(secondArray){
	var arrNew = arr.concat(secondArray);
}
/*function readyToFight(minDamage){
console.log(arr.every(isBelowThreshold));

}
function lessThanDamage(currentValue){
	currentValue = arr[].HP                            //question!!!!!!!!!!!!!!!!!!!!
	return currentValue <Number(getDamage())
}*/

function relocation(firstObject,secondObject){
	firstObject=getSourceNumberRelocation();
	secondObject=getSourceNumberRelocation();
	var objTemp=arr[Number(firstObject)];
	arr[Number(firstObject)]=arr[Number(secondObject)];
	arr[Number(secondObject)]=objTemp;
}
function clone(sourceNumber){
	sourceNumber = getSourceNumberClone();
		var newMilitaryTemp = copyObj(arr[Number(sourceNumber)])
		newMilitaryTemp.number= arr.length;
		arr.push(newMilitaryTemp);
		//console.log(arr);
}

getNewMilitary();
//checkDistance();
//heal();
//checkDistanceForAll();
//contactArray(['1','2','3']);
//relocation();
//clone();