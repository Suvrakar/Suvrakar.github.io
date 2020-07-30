function fn1(){
			
			var str=document.getElementById("input1").value;
			var nameArr = str.split(',');
			
			
			var sum=0; 
			var avg=0;
			var max=0;
			var min=100000000000;
			
			for(var i=0; i<=nameArr.length - 1; i++){
			
			
			var a = parseInt(nameArr[i]);
			sum=sum+a;
			avg=sum/nameArr.length;
				
			}
			
			
			document.write("Sum of the numbers: "+sum); 
			document.write("<br>");
			document.write("Average of the numbers: "+avg); 
			document.write("<br>");
			
			
			for(var i=0; i<=nameArr.length - 1; i++){
			var a = parseInt(nameArr[i]);
			
		
			if(max<nameArr[i]) {
				max=nameArr[i];
			}

		

					
			}
			
			document.write("Higest number is: "+max); 
			
			document.write("<br>");
			
			for(var i=0; i<=nameArr.length - 1; i++){
			var a = parseInt(nameArr[i]);
			
		
			if(min>nameArr[i]) {
				min=nameArr[i];
			}

		

					
			}
			
			document.write("Lowest number is: "+min); 
			
			const reversed = nameArr.reverse();
			document.write("<br>");
			document.write('reversed:', reversed);
			}
			
			