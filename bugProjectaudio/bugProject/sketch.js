var bug = [];
var count = 30;
var size = 80;
var score = 0;
var time = 30;
var s = 0;
var startTime = 0;
var bool = true;
var moving = 0;
var state = 0;
var playGameAudio;
var synth, loadingSequence, met, buggieSound;
var bpm = 120;


function preload()
{
        //Preloads the bug spritesheet
      	for (var i = 0; i < count; i++)
      	{
      		bug[i] = new BugCrawler("Bugie2.png", random(560) + 40, random(400) +20, random([-1, +1]), bool);
      	}
				  img = loadImage("backgroundbug.png");
          playGameAudio = new Tone.Player("gamesong.mp3").toMaster();
          Tone.Transport.bpm.value = bpm;
          Tone.Transport.loop = true;
          Tone.Transport.loopEnd = "4m";

          buggieSound = new Tone.Synth({
            oscillator: {
              type: "square"
            },
            envelope: {
              attack: 1,
              decay: 0.2,
              sustain: 0.1,
              release: 0.1
            }
          }).toMaster();
 buggieSound.volume.value = -16;

 synth = new Tone.PolySynth(3, Tone.MonoSynth).toMaster();
 synth.volume.value = -40;

 hihatSynth = new Tone.MetalSynth().toMaster();
 hihatSynth.volume.value = -34;

 Tone.Transport.schedule(triggerSynth, "1n");

 met = new Tone.Loop(
   function(time) {
     hihatSynth.triggerAttackRelease("4n", time);
   },
   "16n"
 );
 met.probability = 0.8;

 sequence = new Tone.Sequence(
   synthNotes,
   [
     "d4",
     ["a3", "a4"],
     ["d3", "d3"],
     ["a3", "a3"],
     "e3"
   ],
   "4n"
 );
 sequence.start().stop("4m");

 Tone.Transport.start();
}

function synthNotes(time, note) {
 synth.triggerAttackRelease(note, "8n", time);
}

function triggerSynth(time) {
 synth.triggerAttackRelease("E4", "8n", time);
}



function clicked()
{
        //Mouse Click Function
      	if (mouseIsPressed)
      	{
      		mouseClick = true;
      	}
      	else
      	{
      		mouseClick = false;
      	}
        return false;
}

function mousePressed()
{
  //Squishes the bug when the user clicks on a bug
  for (var i = 0; i < count; i++)
  {
    bug[i].crush(mouseX, mouseY);

  }
}

function setup()
{
        //Canvas
  createCanvas(640, 480);
  imageMode(CORNERS);
 playGameAudio.autostart = false;

}

function draw()
{
      	background(255);

        //Start Screen
        if (state == 0)
        {
            imageMode(CORNER);
					  background(img);
            textSize(85);
            fill(0);
            textFont("Cursive");
            text("Bug Squish", 80, 400);
            fill(255, 255, 255);
            textSize(20);
            text("START!", 290, 290);
            fill(255, 51, 0, 70);
            rect(250, 260, 150, 50);
            if(mouseX >= 250 && mouseX <= 400 && mouseY >= 250 && mouseY <=350 && mouseClick == true)
            {
              state = 1;
              startTime = second(30);
            }
        }

        //Gameplay Screen
        if (state == 1)
        {
					background(255, 204, 204);
          s = second();
          time = 30-(abs(startTime - s));
          for(var i = 0; i < count; i++)
          {
            bug[i].draw();
            textSize(24);
          }
					textFont("Fantasy");
          textAlign(LEFT);
          text("Score: " + score, 0, 25);
          fill(255, 255, 255);
          textAlign(LEFT);
          text("Time: " + time, 0, 50);
          if (time == 0)
          {
            state = 2;
            playGameAudio.start();
          }

        }

        //Game Over Screen
        if (state == 2)
        {
					background(255, 153, 51, 90);
          fill(0);
          textSize(50);
          textFont("Cursive");
          text("GAME OVER", 200, 100);
          textSize(25);
          text("Bugs Squished: " + score, 220, 150);
					fill(102, 255, 102);
					rect(250, 260, 150, 50);
					fill(255);
					textSize(20);
					text("Play Again!", 290, 290);

					if(mouseX >= 250 && mouseX <= 400 && mouseY >= 250 && mouseY <=350 && mouseClick == true)
					{
					 state = 1;
					 startTime = second(30);
					}
        }

        //Win Screen - The user squished the maximum amount of bugs
        if (score == 30)
        {
          playGameAudio.start();
          state = 3;

          if (state == 3){
					 background(255, 153, 51, 90);
           text("You squished all THE bugs", 180, 200);
					 fill(0);
					 textSize(20);
					 text("Play Again!", 290, 290);
					 fill(102, 255, 102);
					 rect(250, 260, 150, 50);
					 if(mouseX >= 250 && mouseX <= 400 && mouseY >= 250 && mouseY <=350 && mouseClick == true)
					 {
					 	state = 1;
					 	startTime = second(30);
					 }
        }
			}

        clicked();
}

function BugCrawler(imageName, x, y, moving, bool)
{
	this.spritesheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = moving;
	this.facing = moving;
	this.bool = bool;
  this.squished = false;

	this.draw = function()
	{

		  push();
		  translate(this.x, this.y);
		  if (this.facing < 0)
		  {
		  	scale(-1.0, 1.0);
		  }
      if(this.bool == true)
      {

          		  if (this.moving == 0)
          		  {
                  image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);

          		  }
          		  else
          		  {
                  if(this.frame == 0)
                    image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
            		  if (this.frame == 1)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 80, 0, 80, 80);
            		  if (this.frame == 2)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 160, 0, 80, 80);
            		  if (this.frame == 3)
            		 	 image(this.spritesheet, 0, 0, 80, 80, 240, 0, 80, 80);


                  //speed up
            		  if (frameCount % 6 == 0)
                  {
                    			   this.frame = (this.frame + 1) % 3;
                    			   this.x = this.x + 6 * this.moving;
                             if(this.x < 50 || this.x > width - 50)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
            		  }

                  if (score >= 5)
                  {
                     if (frameCount % 3 == 0)
                  {
                             this.frame = (this.frame + 1) % 3;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }

                  if (score >= 10)
                  {
                     if (frameCount % 1 == 0)
                  {
                             this.frame = (this.frame + 1) % 3;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }

                  if (score >= 15)
                  {
                     if (frameCount % 1 == 0)
                  {
                             this.frame = (this.frame + 1) % 8;
                             this.x = this.x + 6 * this.moving;
                             if(this.x < 40 || this.x > width - 40)
                             {
                                    this.moving = -this.moving
                                    this.facing = -this.facing
                             }
                  }
                  }
              }
      }
      else
      {
        image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);
      }
		  pop();
	}

	this.stop = function()
	{
		this.moving = 0;
		this.frame = 3;
	}

	this.go = function(direction)
	{
		this.moving = direction;
		this.facing = direction;
	}
  this.squished = function(x, y) {
  if (
    this.x - 40 < x && x < this.x + 40 && this.y - 40 < y && y < this.y + 40
  ) {
    if (!this.dead) {
      this.moving = 0;
      this.frame = 3;
      this.dead = true;
      score++;

      return true;
    }
  }
  return false;
};

  this.crush = function(x, y)
  {

    //Crushes the bugs
    if (this.x -40 < x && x < this.x + 40 && this.y -40 < y && y < this.y + 40)
    {

      this.moving = 0;
      this.mouseX = x;
      this.mouseY = y;
      this.initialX = this.x;
      this.initialY = this.y;
      buggieSound.triggerAttackRelease("A7", .3)
      if (this.bool == true)
      {
        score++;
      }
      this.bool = false;
    }
  }

}
function setLoadingMusic() {
  setBpm(120);
  met.stop();
}

function setGameMusic() {
  met.start().stop("16m");
}

function setBpm(val) {
  bpm = val;
  Tone.Transport.bpm.value = bpm;
}
