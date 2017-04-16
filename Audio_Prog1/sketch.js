var player;
var player1;
var player2;
var player3;

var distortion;
var playButton;
var stopButton;
var playButton1;
var stopButton1;
var playButton2;
var stopButton2;
var playButton3;
var stopButton3;

var tremolo;
var trem = false;
var distorty = false;


var distortionbutton;
var distortionOffbutton;

function preload(){
	distortion = new Tone.Distortion(0.5).toMaster();


	player = new Tone.Player("Valerie2.mp3").toMaster();
	//distortion.toMaster();
	//tremolo.connect(distortion);
	//player.connect(tremolo);

	player1 = new Tone.Player("Location2.mp3").toMaster();
	//distortion.toMaster();
	//tremolo.connect(distortion);
	//player1.connect(tremolo);

	player2 = new Tone.Player("Sade2.mp3").toMaster();
	//distortion.toMaster();
	//tremolo.connect(distortion);
	//player2.connect(tremolo);

	player3 = new Tone.Player("Crush2.mp3").toMaster();
	//distortion.toMaster();
	//tremolo.connect(distortion);
	//player3.connect(tremolo);
}

function setup() {
	createCanvas(600, 400);
	distortion.wet.value = 1;
	player.autostart = false;
	player.playbackRate = 1;
	player1.autostart = false;
	player1.playbackRate = 1;
	player2.autostart = false;
	player2.playbackRate = 1;
	player3.autostart = false;
	player3.playbackRate = 1;

	playButton = createButton('Play Valerie!');
	playButton.position(40, 45);
	playButton.mousePressed(play);
	stopButton = createButton('Stop');
	stopButton.position(55, 75);
	stopButton.mousePressed(stop);

	playButton1 = createButton('Play Khalid Location!');
	playButton1.position(300, 49);
	playButton1.mousePressed(play1);
	stopButton1 = createButton('Stop');
	stopButton1.position(325, 85);
	stopButton1.mousePressed(stop1);

	playButton2 = createButton('Play Some Sade!');
	playButton2.position(40, 115);
	playButton2.mousePressed(play2);
	stopButton2 = createButton('Stop');
	stopButton2.position(60, 145);
	stopButton2.mousePressed(stop2);

	playButton3 = createButton('Play Crush!');
	playButton3.position(300, 115);
	playButton3.mousePressed(play3);
	stopButton3 = createButton('Stop');
	stopButton3.position(325, 145);
	stopButton3.mousePressed(stop3);

distortionbutton = createButton('Trigger distortion/Resume');
distortionbutton.position(85, 250);
distortionbutton.mousePressed(play5);

distortionOffbutton = createButton('Pause Everything');
distortionOffbutton.position(270, 250);
distortionOffbutton.mousePressed(play6);
}

function draw() {
	background(255, 80, 80);
	fill(255);
	textSize(20);
	text("Hello", 20, 20);
}

function play(){
	player.start();
}

function stop(){
	player.stop();
}

function play1(){
	player1.start();
}

function stop1(){
	player1.stop();
}

function play2(){
	player2.start();
}

function stop2(){
	player2.stop();
}

function play3(){
	player3.start();
}

function stop3(){
	player3.stop();
}

function play5(){
  distorty = true;
	 player.connect(distortion);
	 player1.connect(distortion);
	 player2.connect(distortion);
	 player3.connect(distortion);
}
function play6(){
	player.disconnect(distortion);
	player1.disconnect(distortion);
	player2.disconnect(distortion);
	player3.disconnect(distortion);
}
