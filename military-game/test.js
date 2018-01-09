
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

    var health = document.createElement("li");
    health.innerHTML = "Health:" + res.health;
    warriorBody.appendChild(health);

    var maxHealth = document.createElement("li");
    maxHealth.innerHTML = "Max health:" + res.maxHealth;
    warriorBody.appendChild(maxHealth);

    var damage = document.createElement("li");
    damage.innerHTML = "Damage:" + res.damage;
    warriorBody.appendChild(damage);

    var distance = document.createElement("li");
    distance.innerHTML = "Distance:" + res.distance;
    warriorBody.appendChild(distance);

    var maxDistance = document.createElement("li");
    maxDistance.innerHTML = "Max distance:" + res.maxDistance;
    warriorBody.appendChild(maxDistance);


   /* for (var key in res){
        var liElement = document.createElement("li");
         liElement.innerHTML = res[key];
        warriorBody.appendChild(liElement);
    }*/

    warriorBlock.appendChild(warriorTitel);
    warriorBlock.appendChild(warriorBody);

    listOfWarriors.appendChild(warriorBlock);

 
});
    land.appendChild(listOfWarriors);
    land.appendChild(field);
    land.appendChild(scoreBoard); 
    container.appendChild(land);