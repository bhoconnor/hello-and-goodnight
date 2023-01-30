function setup() {
  createCanvas(400, 400);
}

var x = 200;
var y = 370;
var headX = 60;
var headY = 300;
var nightHeadX = headX * 5.6;
var nightHeadY = headY / 3;
var headWidth = 30;
var headHeight = 30;

function draw() {
  background(255, 255, 255, 255);

  y--;

  if (y > 200) {
    //WHITE background
    background(255, 255, 255, 255);

    //morning dude
    //head
    ellipse(headX, headY, headWidth, headHeight);
    //torso
    line(headX, headY + 15, headX, headY + 60);
    //left leg
    line(headX - 25, headY + 100, headX, headY + 60);
    //right leg
    line(headX + 25, headY + 100, headX, headY + 60);
    //right arm
    line(headX, headY + 30, headX + 30, headY);
    //left arm
    line(headX, headY + 30, headX - 30, headY + 40);
    //left arm coffee handle
    arc(headX - 30, headY + 35, 20, 20, 250, 430);
    //left arm coffee mug portion
    rect(headX - 47, headY + 20, 20, 30);
    //left arm coffee line1
    line(headX - 42, headY - 10, headX - 39, headY + 13);
    //left arm coffee line2
    line(headX - 32, headY - 10, headX - 33, headY + 13);
    //left arm coffee line3
    line(headX - 24, headY - 10, headX - 29, headY + 13);

    //white sun
    fill(255, 255, 255, 255);
    ellipse(x, y, 200, 200);

    // Hi1
    var Hi = function () {
      var hiX = headX + 275;
      var hiY = headY;

      fill(8, 8, 8, 255);
      textSize(20);
      text("¡Buen", hiX, hiY);
    };

    Hi();

    // Hi2
    var Hi2 = function () {
      var hi2X = headX + 275;
      var hi2Y = headY + 20;

      fill(8, 8, 8, 255);
      textSize(20);
      text("día!", hi2X, hi2Y);
    };

    Hi2();
  }

  //SCENE CHANGE

  if (y < 200) {
    //BLACK background
    background(10);

    if (y > 5) {
      //night dude
      stroke(130, 126, 130, 255);
      //head
      ellipse(nightHeadX, nightHeadY, headWidth, headHeight);
      //torso
      line(nightHeadX, nightHeadY - 15, nightHeadX, nightHeadY - 60);
      //left leg
      line(nightHeadX + 25, nightHeadY - 100, nightHeadX, nightHeadY - 60);
      //right leg
      line(nightHeadX - 25, nightHeadY - 100, nightHeadX, nightHeadY - 60);
      //left arm
      line(nightHeadX, nightHeadY - 30, nightHeadX + 30, nightHeadY - 40);
      //right arm
      line(nightHeadX, nightHeadY - 30, nightHeadX - 30, nightHeadY);
      //left arm beer handle
      arc(nightHeadX + 30, nightHeadY - 35, 20, 20, 90, 270);
      //left arm beer mug portion
      rect(nightHeadX + 27, nightHeadY - 50, 20, 30);
      //beer lines
      stroke(10);
      //left arm beer line1
      line(nightHeadX + 44, nightHeadY - 28, nightHeadX + 44, nightHeadY - 45);
      //left arm beer line2
      line(nightHeadX + 37, nightHeadY - 28, nightHeadX + 37, nightHeadY - 45);
      //left arm beer line3
      line(nightHeadX + 30, nightHeadY - 28, nightHeadX + 30, nightHeadY - 45);

      //gray moon
      fill(130, 126, 130, 255);
      ellipse(x, y, 200, 200);

      // Bye1
      var Bye = function () {
        var byeX = nightHeadX - 325;
        var byeY = nightHeadY;

        fill(250, 250, 250, 255);
        textSize(20);
        text("¡Buenas", byeX, byeY);
      };
      Bye();

      // Bye2
      var Bye2 = function () {
        var bye2X = nightHeadX - 325;
        var bye2Y = nightHeadY + 20;

        fill(250, 250, 250, 255);
        textSize(20);
        text("noches!", bye2X, bye2Y);
      };
      Bye2();
    }

    // FIN
    if (y < 5) {
      var scene = 200;
      while (scene < 400) {
        fill(247, 247, 250);
        text("FIN", scene, 200, 30, 30);
        scene += 200;
      }
    }
  }
}
