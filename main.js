function checkPalindrome(){
	var str_inp = document.getElementById("input_id").value;
	var str_orig = str_inp;
	var res = "";
	var str_arr = [];
	str_arr = str_inp.split("");
	str_arr = str_arr.reverse();
	str_inp = str_arr.join("");
	if(str_inp == "")
        {
	alert("input should be filled");
	}
	else
	if(str_orig == str_inp){
		res = "yes";
	}
	else{
		res = "No";
	}
	document.getElementById("demo").innerHTML = res;
	
}

function displayInput(){
	var str_inp = document.getElementById("input_id").value;
	if(!isNaN(str_inp))
	{
		alert("Input should be string");
	}else {
		document.getElementById("display_id").innerHTML = "input is " + str_inp;
	}
}
