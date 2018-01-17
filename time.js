
setInterval(function all(){
	
	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth() + 1;
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var time =[];
	var date = [];
	var year = d.getFullYear();
	var dayWeek = d.getDay();

	if (day < 10)
		date.push(0 , day, "Day");
	else
		date.push(Math.trunc(day/10), day % 10, "Day" ) ;
	if (month < 10)
		date.push(0 , month, "Month");
	else
		date.push(Math.trunc(month/10), month % 10, "Month") ;
	date.push(Math.trunc(year/1000), Math.trunc((year%1000)/100), Math.trunc((year%100)/10), year % 10, "Year")



	if (hours < 10)
		time.push(0 , hours, 11);
	else
		time.push(Math.trunc(hours/10), hours % 10, 11) ;
	if (minutes < 10)
		time.push(0 , minutes, 11);
	else
		time.push(Math.trunc(minutes/10), minutes % 10, 11);
	if (seconds < 10)
		time.push(0 , seconds);
	else
		time.push(Math.trunc(seconds/10), seconds % 10) ;


	containerTime.innerHTML = "";
	leftDate.innerHTML="";
	rightDay.innerHTML="";

	function showWeek(){
		rightDay.innerHTML
	};
	time.forEach(createDivTime);
	date.forEach(createDivDate);
	createDivDay(dayWeek);

},1000);

var createDivTime = function(temp){
	var resourceTemplate = function (number) {
    	var content = '<div class = the' + number + '></div>';
    	return content;
	};
	containerTime.innerHTML += resourceTemplate(temp);
};

var createDivDate = function(temp){
	var resourceTemplate = function (number) {
    	var content = '<div class = date' + number + '></div>';
    	return content;
	};
	leftDate.innerHTML += resourceTemplate(temp);
};
var createDivDay = function(temp){
	var resourceTemplate = function (number) {
		var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    	var content = '<div class = dayOfTheWeek>' + week[number]  + '</div>';
    	return content;
	};
	rightDay.innerHTML += resourceTemplate(temp);
};


