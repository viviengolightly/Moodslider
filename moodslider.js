//SKY Software Engineering Academy - Unattended Test 
//Author: Marta Szukalska
//Date: 22nd October 2017
//Moodslider Web Application: JavaScript Part


//jQuery - this part hides and shows sections of a web app based on the input.

$("#one").hide();
$("#two").hide();
$("#three").hide();

$("#upload").click(function(){
	$("#one").toggle();
});

$("#button").click(function(){
	$("#one").hide();
	$("#two").show();
	$("#three").show();
});

//End of jQuery


//Function to get the uploaded file.

var control = document.getElementById("moviesFile");
control.addEventListener("change", getFile, false);
function getFile(){
	var file = control.files[0];
	
	return file.name;
}

//Slider One - reads input from slider.
var slider = document.getElementById("range");

slider.oninput = function(){

	if(this.value == '-1'){
		var mood= 'Agitated';
	}else if(this.value == '1'){
		var mood = 'Calm';
	}else if(this.value == '0'){
		var mood = 'NO MOOD';
	}
	loadXMLDoc(mood);
	
}

//Slider Two - reads input from slider.
var slider1 = document.getElementById("range1");

slider1.oninput = function(){

	if(this.value == '-1'){
		var mood= 'Sad';
	}else if(this.value == '1'){
		var mood = 'Happy';
	}else if(this.value == '0'){
		var mood = 'NO MOOD';
	}
	loadXMLDoc(mood);
}

//Slider Three - reads input from slider.
var slider2 = document.getElementById("range2");

slider2.oninput = function(){

	if(this.value == '-1'){
		var mood= 'Tired';
	}else if(this.value == '1'){
		var mood = 'Wide Awake';
	}else if(this.value == '0'){
		var mood = 'NO MOOD';
	}
	loadXMLDoc(mood);
}

//Slider Four - reads input from slider.
var slider3 = document.getElementById("range3");

slider3.oninput = function(){

	if(this.value == '-1'){
		var mood= 'Scared';
	}else if(this.value == '1'){
		var mood = 'Fearless';
	}else if(this.value == '0'){
		var mood = 'NO MOOD';
	}
	loadXMLDoc(mood);
}


//Function to load the uploaded data.
function loadXMLDoc(mood) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this, mood); 
		}
	};

	var fileIn = getFile();
	xmlhttp.open("GET", fileIn, true);
	xmlhttp.send();
}

//Function to parse the titles and images (from xml file) for mood specified by the user.

function myFunction(xml, mood) {
	var i;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("programme");
	var count = 0;
	var title;

	document.getElementById("currentmood").innerHTML = mood;
	
		for (i = 0; i <x.length; i++) {
			var m = x[i].getElementsByTagName("mood")[0].textContent;
			if( m == mood){
				count = count+1;
				title = "title" + count;
				image = "image" + count;
				document.getElementById(title).innerHTML = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
				document.getElementById(image).src = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
			}
		}
		count = 0;	
}
	