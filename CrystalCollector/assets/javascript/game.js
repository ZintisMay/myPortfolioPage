//audio section

	//for the audio button
	var audio=true;

	//sets var to audio file in html page
	var music01 = document.getElementById("01");
	//sets volume
	music01.volume = 0.5;

	var tinkle = document.getElementById("tinkle");
	//sets volume
	tinkle.volume = 1;

	var tinkle2 = document.getElementById("tinkle2");
	//sets volume
	tinkle.volume = 1;

	var tinkle3 = document.getElementById("tinkle3");
	//sets volume
	tinkle.volume = 1;

	var tinkle4 = document.getElementById("tinkle3");
	//sets volume
	tinkle.volume = 1;

	var breaking = document.getElementById("breaking");
	//sets volume
	breaking.volume = 1;

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
			theMusic.play();		
		}

	}

	function pauseAudio() { 

	    if (audio == true)
	    {document.getElementById('sound').src='assets/images/soundx.png';audio=false;music01.pause(); }
	    else if (audio == false)
	    {document.getElementById('sound').src='assets/images/sound.png';audio=true;music01.play();}

	} 
	

//old section
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

//enter low end of range, and high end of range, changes randomnumber

$('#winning').html(wins);
$('#losing').html(losses);


function randomizer(x, y) {

	return randomnumber = Math.floor(Math.random() * (y-x) + x);
}

function begin() {

targetnumber = randomizer(40, 60);
red = randomizer(2, 15);
green  = randomizer(2, 15); 
blue = randomizer(2, 15);
yellow = randomizer(2, 15);
game = true;
currentnumber = 0;

playMusic(music01);

// function playRandomMusic(){
// 	var randomMusicNumber = Math.floor((Math.random()*6)+1);
// 	console.log(randomMusicNumber);
// 	var targetMusic = "music0" + randomMusicNumber;
// 	var musicObject = document.getElementById(targetMusic);
// 	playMusic(musicObject);
// }



$('#targetnumber').html(targetnumber);
$('#currentnumber').html(currentnumber);


// console.log(red + 
// 	" " + blue + 
// 	" " + green + 
// 	" " + yellow);
// console.log(targetnumber);
}


// console.log(red + 
// 	" " + blue + 
// 	" " + green + 
// 	" " + yellow)
// console.log(targetnumber)

// for (a=0;a<=1;a++){

// randomizer(5, 15);

// console.log("randomnumber" + randomnumber);

// }

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

	$('#winning').html("Wins: " + wins);
	$('#losing').html("Losses: " + losses);

 }
