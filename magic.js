window.onload = function(e){ 

    
    
    document.getElementById("clear").onclick = clear;
    document.getElementById("capital").onclick = captilize;
    document.getElementById("sort").onclick = sort;
    document.getElementById("reverse").onclick = reverse;
    document.getElementById("strip_blank").onclick = strip_blank;
    document.getElementById("add_number").onclick = add_number;
    document.getElementById("shuffle").onclick = shuffle;
}

var clickState = 0;



function clear(){
	
	var magic_element = document.getElementById("magic_id");
		
	magic_element.value = "";

}

function captilize(){

    var magic_element = document.getElementById("magic_id");
		
    var value = magic_element.value;

    if (clickState == 0) {
       
        magic_element.value = value.toUpperCase();
        clickState = 1;
      } else {
        
        magic_element.value = value.toLowerCase();
        clickState = 0;
      }
  

}

function sort(){

   	var magic_element = document.getElementById("magic_id");
		
    var value = magic_element.value;
    
    magic_element.value = value.split("\n").sort().join("\n");

}

function reverse(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;

 var x = value.split("\n");
for(i=0; i<x.length; i++){    
    x[i] = x[i].split("").reverse().join("");
} 
 magic_element.value = x.join("\n");

}

function strip_blank(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;

 
 magic_element.value = value.replace(/\s/g,"");

}

function add_number(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;
 
 var x = value.split("\n");
for(i=0; i<x.length; i++){    
    x[i] = x[i]+"1. ";;
} 
 magic_element.value = x.join("\n");

}

function shuffle(){

 var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;
 var x = value.split("\n");
 for (var i = x.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = x[i];
    x[i] = x[j];
    x[j] = temp;
}
 
 magic_element.value = x.join("\n");

}


