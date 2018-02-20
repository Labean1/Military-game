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
    container.appendChild(land);
});