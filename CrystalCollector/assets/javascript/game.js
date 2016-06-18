
//utils
function randomizer(x, y) {
	return randomnumber = Math.floor(Math.random() * (y-x) + x);
}

//audio section

	//for the audio button
	var audio=true;

	var currentSong = 0;
	var music01 = [];

	//sets var to audio file in html page
	for(x=1;x<7;x++){
		var temp = "0" + x;
		console.log(temp);
		music01.push(document.getElementById(temp));
	}


	//sets volume
	music01.volume = 0.5;
	console.log(music01);

	//the tinkle sounds
	var tinkle = document.getElementById("tinkle");

	var tinkle2 = document.getElementById("tinkle2");

	var tinkle3 = document.getElementById("tinkle3");

	var tinkle4 = document.getElementById("tinkle3");

	var breaking = document.getElementById("breaking");

	var yay = document.getElementById("yay");
	yay.volume = 1;

	var tinklecounter = 0;

	// playmusic function will play music associated with the var
	function playMusic(x){

		if (x == tinkle){
			if (tinklecounter == 0){
				tinkle.play();
				tinklecounter++;
				console.log("tinklecounter = 0")
			}else if (tinklecounter == 1){
				tinkle2.play();
				tinklecounter++;
				console.log("tinklecounter = 1")
			}else if (tinklecounter == 2){
				tinkle3.play();
				tinklecounter++;
				console.log("tinklecounter = 2")
			}else if (tinklecounter == 3){
				tinkle4.play();
				tinklecounter = 0;
				console.log("tinklecounter = 3")
			}
		}else {
			var theMusic = x;
			console.log(theMusic);
			theMusic.play();		
		}

	}

	function pauseAudio() { 

		if(game == true){
			if (audio == true){
		    	document.getElementById('sound').src='assets/images/soundx.png';
		    	audio=false;
		    	music01[currentSong].pause(); 
		    }
		    else if (audio == false){
		    	document.getElementById('sound').src='assets/images/sound.png';
		    	audio=true;
		    	music01[currentSong].play();
		    }
		}
	    
	} 
	
	function nextAudio() {

		console.log(currentSong);
		if(game == true){	
			music01[currentSong].pause();

			if (audio == true){

		    	music01[currentSong].pause(); 
			}

			currentSong = currentSong+1;
			if(currentSong == 6){currentSong = 0;}
			playMusic(music01[currentSong]);
		}	
	}

//declares globals, etc...
var game = false;
var randomnumber;
var red;
var green;
var blue;
var yellow;
var targetnumber = 0;
var currentnumber = 0;
var wins = 0;
var losses = 0;
$('#winning').html(wins);
$('#losing').html(losses);

//game code begins here

function begin() {

targetnumber = randomizer(40, 60);
red = randomizer(2, 15);
green  = randomizer(2, 15); 
blue = randomizer(2, 15);
yellow = randomizer(2, 15);
game = true;
currentnumber = 0;

currentSong = randomizer(0, 5);
playMusic(music01[currentSong]);

$('#targetnumber').html(targetnumber);
$('#currentnumber').html(currentnumber);

}

$('#red').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + red;
		console.log(currentnumber)
		playMusic(tinkle);
		updatecurrent();
	}
});

$('#blue').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + blue;
		console.log(currentnumber)
		playMusic(tinkle);
		updatecurrent();
	}	
});

$('#green').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + green;
		console.log(currentnumber)
		playMusic(tinkle);
		updatecurrent();
	}
});

$('#yellow').on('click', function() {
	if (game == true){
		currentnumber = currentnumber + yellow;
		console.log(currentnumber)
		playMusic(tinkle);
		updatecurrent();
	}
});

$('#begin').click(function() {
if (game==false){
	begin();
	console.log(currentnumber)
	updatecurrent();}
});

function updatecurrent(){
	$('#currentnumber').html(currentnumber);
	checker();
}

function showModal(){
	$('#myModal').modal('show');
}

//runs after click, checks for victory/defeat and plays appropriate sounds
function checker(){

	if (currentnumber == targetnumber){
		playMusic(yay);
		$('.modal-title').html("CONGRATULATIONS!");
		$('#modalP').html("You Win!");
		showModal();

		game=false;
		wins = wins+1;
		begin();

	} else if (currentnumber > targetnumber){
		playMusic(breaking);
		$('.modal-title').html("FAILURE!");
		$('#modalP').html("YOU LOSE FOREVER!!!!!!");
		showModal();


		// alert("YOU LOSE FOREVER!!!!!!");
		game=false;
		losses = losses+1;
		begin();
	}

	$('#winning').html(wins);
	$('#losing').html(losses);

 }
