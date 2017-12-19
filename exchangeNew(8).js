function quantity(){
	var  quantityTemp = prompt("quantity");
	return(quantityTemp);
};
function oldCurrency(){
	var oldCurrencyTemp = prompt("from");
	return(oldCurrencyTemp);
};
function newCurrency(){
	var newCurrencyTemp = prompt("to");
	return(newCurrencyTemp);
};
function newQuantity(from,to){
	from = oldCurrency() ;
	to = newCurrency();
	var quantityTemp = quantity();
	var objExchange = {
		USD : {
			UAH:28,
			EUR:0.85,
			RUB:58.69
		},
		EUR : {
			UAH:23.9,
			RUB:69.09,
			USD:1.18
		},
		RUB : {
			UAH:0.05,
			EUR:0.01,
			USD:0.02
		},
		UAH : {
			EUR:0.030,
			RUB:2.1,
			USD:0.036
		}
	}
	if((!objExchange[from])||(!objExchange[from][to])){
		alert("Wrong input, try again");
		newQuantity(from,to);
	}
	else
	alert(quantityTemp*objExchange[from][to]);
};
newQuantity();