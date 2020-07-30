window.onload = function(e){ 
    
	document.getElementById("conver_btn").onclick = convert;
}





function convert(){
	
	var inputelement = document.getElementById("input_id");
	var selectelement = document.getElementById("select_id");
	var resultelement = document.getElementById("result_div");

	var result = 0;

	if( selectelement.value==="1")
	{
		//conver lb to kg
		result = inputelement.value * 0.4536;
		console.log(result);
		result = result + " kilograms"

	}
	else{
		//convert kg to lb
		result = inputelement.value * 2.2046;
		result = result+" pounds";

	}

	resultelement.innerHTML = result



}