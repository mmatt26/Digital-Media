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


function preload()
{
        //Preloads the bug spritesheet
      	for (var i = 0; i < count; i++)
      	{
      		bug[i] = new BugCrawler("Bugie2.png", random(560) + 40, random(400) +20, random([-1, +1]), bool);
      	}
				  img = loadImage("backgroundbug.png");
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
					background(0, 255, 0);
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
          state = 3;
          if (state == 3){
					 background(255, 153, 51, 90);
           fill(255)
           textSize(50);
           textFont("Cursive");
           text("Master Bug Killer!", 180, 200);
					 fill(102, 255, 102);
					 rect(250, 260, 250, 50);
           fill(0);
					 textSize(20);
					 text("Reload Page Play to Again!", 255, 290);
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
                  image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);

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
      if (this.bool == true)
      {
        score++;
      }
      this.bool = false;
    }
  }

}
