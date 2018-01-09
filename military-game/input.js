	var newResourceKnight = new militaryResource("knight", 100, 200, 20);
	var newResourceArcher = new militaryResource("archer", 50, 150, 30);
	console.log(newResourceKnight)
	console.log(newResourceArcher);
	var newSquad1 = new squad([newResourceArcher, newResourceArcher, newResourceArcher, newResourceKnight]);
	var newSquad2 = new squad([newResourceKnight, newResourceKnight, newResourceKnight, newResourceKnight]);
	console.log(newSquad1);
	console.log(newSquad2);

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

