
	//showing random quote
window.onload = function(e){ 
    quote_gen();

    document.getElementById("orange").onclick = colorifyOrange;
	document.getElementById("green").onclick = colorifyGreen;
	document.getElementById("yellow").onclick = colorifYellow;
	document.getElementById("blue").onclick = colorifyBlue;
	
}


function quote_gen(){

	var textArray = [
    'Live as if you were to die tomorrow Learn as if you were to live forever.',
    'That which does not kill us makes us stronger.',
    'Be who you are and say what you feel because those who mind dont matter and those who matter dont mind.',
    'Do what you can, with what you have, where you are',
    'Be yourself everyone else is already taken'
];

var randomNumber = Math.floor(Math.random()*textArray.length);

var quoteelement = document.getElementById("quote");

quoteelement.innerHTML=textArray[randomNumber];

}





function colorifyOrange(){
	var quoteelement = document.getElementById("quote");
	quoteelement.style.color = "orange";
	quoteelement.style.backgroundColor = "blue";
	quoteelement.style.fontFamily = "Arial";
	quoteelement.style.fontSize = "17";
	quoteelement.style.border = "2px solid orange";
	

}

function colorifyGreen(){
	var quoteelement = document.getElementById("quote");
	quoteelement.style.color = "green";
	quoteelement.style.backgroundColor = "black";
	quoteelement.style.fontFamily = "Courier New";
	quoteelement.style.fontSize = "16";
	quoteelement.style.border = "2px solid green";

}

function colorifYellow(){
	var quoteelement = document.getElementById("quote");
	quoteelement.style.color = "yellow";
	quoteelement.style.backgroundColor = "red";
	quoteelement.style.fontFamily = "Comic Sans MS";
	quoteelement.style.fontSize = "14";
	quoteelement.style.border = "2px solid yellow";

}

function colorifyBlue(){
	var quoteelement = document.getElementById("quote");
	quoteelement.style.color = "blue";
	quoteelement.style.backgroundColor = "gray";
	quoteelement.style.fontFamily = "Impact";
	quoteelement.style.fontSize = "15";
	quoteelement.style.border = "2px solid blue";

}
	
	
