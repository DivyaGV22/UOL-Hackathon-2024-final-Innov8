//Game character
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;
//Game character's movement
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
//Scenery
var collectables;
var uncollectables;
var canyons;
var stars = []; // Global variable to store the stars
var emitter;
//Camera's movement
var cameraPosX;
//Add game score
var game_score;
//Add in building
var building;
//Add in lives
var lives;
// Define the maximum score
var max_score = 100; 
//Add in game over
var gameOver;
// Sound variables
var backgroundSound;
var collectSound;
var fallSound;
var jumpSound;
var enemySound;
var winSound;
var trySound;
var failSound;
//Store array of platform objects
var platforms;
//Used to determine if gamechar is on a platform
var onPlatform;
//Store array of enemy objects
var enemies;
//Used to determine if gameChar is hit by enemy
var hitByEnemy;
let thejim;
var timerValue = 60;
let font;




// Preload function to load sounds and other assets
function preload(){
    soundFormats("mp3","wav");

    backgroundSound = loadSound("assets/background.mp3");
    backgroundSound.setVolume(0.2);
    
    collectSound = loadSound("assets/collect.wav");
    collectSound.setVolume(0.5);

    fallSound = loadSound("assets/fall.wav");
    fallSound.setVolume(0.5);

    jumpSound = loadSound("assets/jump.mp3");
    jumpSound.setVolume(0.5);

    enemySound = loadSound("assets/enemy.wav");
    enemySound.setVolume(0.5);

    winSound = loadSound("assets/win.wav");
    winSound.setVolume(0.5);

    trySound = loadSound("assets/try.wav");
    trySound.setVolume(0.5);

    failSound = loadSound("assets/fail.wav");
    failSound.setVolume(0.5);

    saladImage = loadImage("images used/salad.png");
    waterImage = loadImage("images used/water.png");
    towelImage = loadImage("images used/towel.png");
    thejimImage = loadImage("images used/thejim.jpg");
    phoneImage = loadImage("images used/smartphone.png");
    burgerImage = loadImage("images used/burger.png");

    font = loadFont("assets/PressStart2P-Regular.ttf");
}


//Game setup and initialisation code
function setup()
{   
    createCanvas(1024, 576);
    //Init lives
    lives = 3;
    //Init gameOver to false
    gameOver = false;
    backgroundSound.play();
    //Init starting variables
    init();
    
    //Create three platforms
    platforms=[];

    platforms.push(createPlatform(400,floorPos_y-100,100));
    platforms.push(createPlatform(600,floorPos_y-200,100));
    
     platforms.push(createPlatform(900,floorPos_y-250,100));
    
    //Create six enemies
    enemies = [];
    enemies.push(createEnemy(-440,floorPos_y-10,90));
    enemies.push(createEnemy(20,floorPos_y-10,150));
    enemies.push(createEnemy(1100,floorPos_y-10,120));
    enemies.push(createEnemy(420,317,20));
    enemies.push(createEnemy(615,220,75));
    enemies.push(createEnemy(960,170,18));
    
    //Create emitter which are the moving stars in the sky
    emitter = new Emitter(width, 0, 0, 1, 2, color(255, 255, 255));
    emitter.startEmitter(70, 500);    

    //set time interval
    textAlign(CENTER);
    setInterval(timeIt, 1000);
    
}

//Initialise game elements and variables
function init(){
    floorPos_y = height * 3/4;
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    gameChar_width = 40;
    
    setupScene();
    //Initialise game_score to 0
    game_score = 0;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    onPlatform = false;
    hitByEnemy = false;
    
    cameraPosX=0;
    

    collectables = [
    { x_pos: -350, y_pos: floorPos_y - 20, size: 40, isFound: false, img: saladImage },
    { x_pos: -150, y_pos: floorPos_y - 20, size: 40, isFound: false, img: waterImage },
    { x_pos: 10, y_pos: floorPos_y - 20, size: 40, isFound: false, img: towelImage },
    { x_pos: 170, y_pos: floorPos_y - 20, size: 40, isFound: false, img: saladImage },
    { x_pos: 420, y_pos: floorPos_y - 20, size: 40, isFound: false, img: waterImage },
    { x_pos: 750, y_pos: floorPos_y - 20, size: 40, isFound: false, img: towelImage },
    { x_pos: 1100, y_pos: floorPos_y - 20, size: 40, isFound: false, img: saladImage },
    { x_pos: 1200, y_pos: floorPos_y - 20, size: 40, isFound: false, img: waterImage },
    { x_pos: 480, y_pos: 310, size: 40, isFound: false, img: towelImage },
    { x_pos: 930, y_pos: 160, size: 40, isFound: false, img: saladImage }
    ];

    uncollectables = [
        { x_pos: 100, y_pos: floorPos_y - 20, size: 40, isFound: false, img: phoneImage },
        { x_pos: 1000, y_pos: floorPos_y - 20, size: 40, isFound: false, img: burgerImage },
        { x_pos: 900, y_pos: floorPos_y - 20, size: 40, isFound: false, img: phoneImage },
        { x_pos: 700, y_pos: floorPos_y - 20, size: 40, isFound: false, img: burgerImage },

    ];

    var canyon2 = {x_pos: -300, width: 100};
    var canyon3 = {x_pos: -100, width: 100};
    var canyon4 = {x_pos: 200, width: 100};
    var canyon5 = {x_pos: 300, width: 100};
    var canyon6 = {x_pos: 600, width: 100};
    var canyon7 = {x_pos: 800, width: 100};
    var canyon8 = {x_pos: 900, width: 100};
    
    canyons =  [canyon2, canyon3, canyon4, canyon5, canyon6, canyon7, canyon8];



      
    building = {x_pos:1200, isReached:false};
    
    //  Initialise stars directly in setup
    for (var i = 0; i < 100; i++) {
        var x = random(0, width);
        var y = random(0, floorPos_y);
        var size = random(1, 4);
        stars.push({ x: x, y: y, size: size });
    }
}
  


function draw()
{
    cameraPosX = gameChar_x - width/2;
    
    ///////////DRAWING CODE//////////

    //Dark blue sky colour
    background(45, 90, 129); 
    
    // Draw the Moon
    drawMoon();
    
    // Stars Drawn
    drawStars();
    
    //Draw the moving stars;
    drawMovingStars();

    textFont(font);
    
    
    
    push();
    translate(-cameraPosX, 0);

    //Bush 1
    fill(8,87,53);
    ellipse(845,465,60,160);
    ellipse(880,465,85,185);
    ellipse(915,465,60,160);
    fill(7,132,86);
    ellipse(845,465,60,140);
    ellipse(880,465,85,165);
    ellipse(915,465,60,140);

    //Bush 2
    fill(8,87,53);
    ellipse(960,465,60,160);
    ellipse(995,465,85,185);
    ellipse(1030,465,60,160);
    ellipse(1065,465,60,160);
    fill(7,132,86);
    ellipse(960,465,60,140);
    ellipse(995,465,85,165);
    ellipse(1030,465,60,140);
    ellipse(1065,465,60,140);

    //Bush 3
    fill(0,87,53);
    ellipse(1145,465,60,160);
    ellipse(1180,465,85,185);
    fill(7,132,86);
    ellipse(1145,465,60,140);
    ellipse(1180,465,85,165);

    //Bush 4
    fill(0,87,53);
    ellipse(285,465,60,160);
    ellipse(320,465,85,185);
    ellipse(355,465,60,160);
   
    ellipse(390,465,60,160);
    ellipse(425,465,85,185);
    ellipse(460,465,60,160);
    
    ellipse(495,465,60,160);
    ellipse(530,465,85,185);
    ellipse(565,465,60,160);
    
    ellipse(600,465,60,160);
    ellipse(635,465,85,185);
    ellipse(670,465,60,160);

    ellipse(705,465,60,160);
    ellipse(740,465,85,185);
    ellipse(775,465,60,160);

    fill(7,132,86);
    ellipse(285,465,60,140);
    ellipse(320,465,85,165);
    ellipse(355,465,60,140);
   
    ellipse(390,465,60,140);
    ellipse(425,465,85,165);
    ellipse(460,465,60,140);
    
    ellipse(495,465,60,140);
    ellipse(530,465,85,165);
    ellipse(565,465,60,140);
    
    ellipse(600,465,60,140);
    ellipse(635,465,85,165);
    ellipse(670,465,60,140);

    ellipse(705,465,60,140);
    ellipse(740,465,85,165);
    ellipse(775,465,60,140);

    //Bush 5
    fill(0,87,53);
    ellipse(210,465,60,160);
    ellipse(175,465,85,185);
    ellipse(140,465,60,160);
    fill(7,132,86);
    ellipse(210,465,60,140);
    ellipse(175,465,85,165);
    ellipse(140,465,60,140);

    //Bush 6
    fill(0,87,53);
    ellipse(845,465,60,160);
    ellipse(880,465,85,185);
    ellipse(915,465,60,160);

    ellipse(105,465,60,160);
    ellipse(70,465,85,185);
    ellipse(35,465,60,160);

    ellipse(0,465,60,160);
    ellipse(-35,465,85,185);
    ellipse(-70,465,60,160);

    ellipse(-105,465,60,160);
    ellipse(-140,465,40,130);

    fill(7,132,86);
    ellipse(845,465,60,140);
    ellipse(880,465,85,165);
    ellipse(915,465,60,140);

    ellipse(105,465,60,140);
    ellipse(70,465,85,165);
    ellipse(35,465,60,140);

    ellipse(0,465,60,140);
    ellipse(-35,465,85,165);
    ellipse(-70,465,60,140);

    ellipse(-105,465,60,140);
    ellipse(-140,465,40,110);

    //Bush 7
    fill(0,87,53);
    ellipse(-165,465,60,160);
    ellipse(-200,465,85,185);
    ellipse(-235,465,60,160);

    ellipse(-270,465,60,160);
    ellipse(-305,465,85,185);
    ellipse(-340,465,60,160);

    fill(7,132,86);
    ellipse(-165,465,60,140);
    ellipse(-200,465,85,165);
    ellipse(-235,465,60,140);

    ellipse(-270,465,60,140);
    ellipse(-305,465,85,165);
    ellipse(-340,465,60,140);
    

    //Light grey ground colour
    noStroke();
    fill(128,128,128);
    rect(-1000,floorPos_y, width*5, height - floorPos_y);
 
    //road
    fill(255);
    rect(55,515,40,10);
    rect(270,515,40,10);
    rect(485,515,40,10);
    rect(700,515,40,10);
    rect(915,515,40,10);
    rect(1130,515,40,10);
    rect(1345,515,40,10);
 
     //yellow lines on the road
    fill(255,255,0);
    rect(-1000, floorPos_y +1, width*5, 10)

    //Draw the canyons
    for(var i=0;i<canyons.length;i++){
        drawCanyon(canyons[i]);
    }
    
    //Draw the clouds
    drawClouds();
    animateClouds();

    

    //Draw the trees
    drawTrees();
   
    //Draw building
    drawbuilding();
    
    //Draw the platforms
    drawPlatforms();
    
    //Draw the enemies
    drawEnemies();
    
    
    // Draw the collectables using a for loop
    for (var i = 0; i < collectables.length; i++) {
        drawCollectable(collectables[i]);
    }
    
    if(onPlatform && isLeft){
        // Game character is walking towards the left
        drawGameCharIsLeft();
    }
    
    else if(onPlatform && isRight){
        // Game character is walking towards the right
        drawGameCharIsRight();
    }
    
    else if (isLeft && isFalling)
	{
		// Game character is jumping while facing the left
        drawGameCharIsLeftAndIsFalling();        
	}
	else if (isRight && isFalling)
	{
		// Game chracter is jumping while facing the right
        drawGameCharIsRightAndIsFalling();
	}
	else if(isLeft)
	{
		// Game Character is walking towards the left
        drawGameCharIsLeft();

	}
	else if(isRight)
	{
		// Game Character is walking towards the right
        drawGameCharIsRight();
    }
    else if(onPlatform)
	{
		// Game Character is facing forward
        drawGameCharStandingFront();
    }

	else if(isFalling || isPlummeting)
	{
		// Game character is jumping while facing the front
        drawGameCharIsFallingOrIsPlummeting();    
	}
	else
	{
		// Game character is stationary and facing the front
        drawGameCharStandingFront();
	};

    // Draw the uncollectables using a for loop
    for (var i = 0; i < uncollectables.length; i++) {
        drawUncollectable(uncollectables[i]);
    }
    
    if(onPlatform && isLeft){
        // Game character is walking towards the left
        drawGameCharIsLeft();
    }
    
    else if(onPlatform && isRight){
        // Game character is walking towards the right
        drawGameCharIsRight();
    }
    
    else if (isLeft && isFalling)
	{
		// Game character is jumping while facing the left
        drawGameCharIsLeftAndIsFalling();        
	}
	else if (isRight && isFalling)
	{
		// Game chracter is jumping while facing the right
        drawGameCharIsRightAndIsFalling();
	}
	else if(isLeft)
	{
		// Game Character is walking towards the left
        drawGameCharIsLeft();

	}
	else if(isRight)
	{
		// Game Character is walking towards the right
        drawGameCharIsRight();
    }
    else if(onPlatform)
	{
		// Game Character is facing forward
        drawGameCharStandingFront();
    }

	else if(isFalling || isPlummeting)
	{
		// Game character is jumping while facing the front
        drawGameCharIsFallingOrIsPlummeting();    
	}
	else
	{
		// Game character is stationary and facing the front
        drawGameCharStandingFront();
	};
    
    
    pop();

    textSize(10);
    fill(0);
    
    // Adjust the position of the timer to the top-right corner
    let timerX = width - 140; 
    let timerY = 110;           
    
    // Display Timer
    if (timerValue >= 60) {
        text("Time Left: 0:" + timerValue, timerX, timerY);
    } else {
        text("Time Left: 0:" + timerValue, timerX, timerY);
    }
    
    // Display Game Over message when timer reaches zero
    if (timerValue == 0) {
        textSize(10);
        text('Game Over,Try Again!', timerX, timerY + 20); 
        //Set gameOver to true
        gameOver = true;
    }
    
     
    
    
    //Draw the game score
    drawGameScore();
    
    //Draw life tokens
    drawLifeTokens();
    
    
    //Check if game over
    if (gameOver){
        drawGameOver()
        //Set the game char back to the starting point
        gameChar_x = width/2;
        gameChar_y = floorPos/y;
        //Draw the game char
        drawGameCharStandingFront();
        return;

}
 
    
    
    ///////////INTERACTION CODE//////////
    //Conditional Statements that move the game character
    if (hitByEnemy) {
        return; // No need to check further if already hit
    }
    if(isPlummeting){ 
        gameChar_y += 10;
        checkIsPlayerDead();
        return;
    }
    if(gameChar_y<floorPos_y){
        isFalling = true;
    }else{
        isFalling = false;
    }
    
    if(isLeft==true){
        gameChar_x-= 5;
    }
    else if(isRight==true){
        gameChar_x += 5;
    }
    
    //To check if game character is within the collectable range
    checkIfGameCharInAnyCollectableRange();

    //To check if game character is within the uncollectable range
    checkIfGameCharInAnyUncollectableRange();
    
    //To check if game character is over the canyon
    checkIfGameCharIsOverAnyCanyons();
    
    //check if game char has reached flag pole
    checkIfGameCharReachbuilding();
    
    //Call checkIfCharacterIsUnderAnyPlatforms()
    checkIfCharacterIsOnAnyPlatforms();
    
    //Call checkIfGameCharHitByAnyEnemy()
    checkIfGameCharHitByAnyEnemy();
    
}



function drawLifeTokens() {

    for (var i = 0; i < lives; i++) {
        var x = 70 * i + 820; // Calculate x position
        var y = 10; // y position
        drawHeart(x, y);
    }
}

function drawHeart(x, y) {
    noStroke(); 

    fill(255, 0, 0); // Red colour for the heart

    beginShape();
    vertex(x + 15, y + 40); // Bottom center of the heart 

    // Left side of the heart
    bezierVertex(x + 15, y + 10, x, y + 5, x, y + 20); 
    bezierVertex(x, y + 30, x + 15, y + 30, x + 15, y + 40); 

    // Right side of the heart
    bezierVertex(x + 15, y + 40, x + 30, y + 30, x + 30, y + 20); 
    bezierVertex(x + 30, y + 5, x + 15, y + 10, x + 15, y + 40); 

    endShape(CLOSE);
}

    // Draw game score
    function drawGameScore() {
    var barWidth = 200;
    var barHeight = 30;
    var barCornerRadius =10;
    var x = width - barWidth - 20;
    var y = 20;
    
    // Draw the background of the bar
    fill(50);
    rect(x, y, barWidth, barHeight,barCornerRadius);

    // Width of the filled part of the bar
     var filledWidth = (game_score / max_score) * barWidth;

    // Draw the green coloured part of the bar
    fill(0, 255, 0);
    rect(x, y, filledWidth, barHeight);

    // Draw the score text inside a cute box
    var boxX = 805; 
    var boxY = 60;  
    var boxWidth = 150; 
    var boxHeight = 30; 
    var boxCornerRadius = 10; 

    // Draw the box
    fill(255, 182, 193); // Light pink colour for the box
    rect(boxX, boxY, boxWidth, boxHeight, boxCornerRadius); 

    // Score in the box
    fill(255); // White colour for the text
    textSize(10);
    textAlign(CENTER, CENTER);
    text("Score: " + game_score + "/" + max_score, boxX + boxWidth / 2, boxY + boxHeight / 2);
}

//For loop iterates over the stars array to draw stars
function drawStars() {
    fill(255, 255, 204); 
    noStroke();
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        ellipse(star.x, star.y, star.size, star.size);
    }
}

//Draws and updates moving stars
function drawMovingStars(){
        emitter.drawAndUpdateParticles();
}

//Check if game character is over any canyons
function checkIfGameCharIsOverAnyCanyons()
{
    for(var i=0;i<canyons.length;i++){
        
     checkIfGameCharIsOverCanyon(canyons[i]);
    }
}

//Check if game character is over the canyon by using specific conditions
checkIfGameCharIsOverCanyon(canyon);


//Loop of array of collectable objects and checks if game character is within range of every collectable 
function checkIfGameCharInAnyCollectableRange(){
    for(var i=0;i<collectables.length;i++){
    checkIfGameCharInCollectableRange(collectables[i]);
    }
}


//Check if game character is in collectable range
checkIfGameCharInCollectableRange(collectable);

//Loop of array of collectable objects and checks if game character is within range of every uncollectable 
function checkIfGameCharInAnyUncollectableRange(){
    for(var i=0;i<uncollectables.length;i++){
    checkIfGameCharInUncollectableRange(uncollectables[i]);
    }
}


//Check if game character is in uncollectable range
checkIfGameCharInUncollectableRange(uncollectable);



function checkIfCharacterIsOnAnyPlatforms(){
    //Check if character is on the platform
    if(isFalling){
        var isContact = false;
        onPlatform = false;
        for(var i=0; i<platforms.length;i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
            if(isContact){
                onPlatform=true;
                break;
            } 
        }
        if(!isContact){
            gameChar_y +=1;
        }
    }
}


//Implement checkIfGameCharHitByAnyEnemy()
function checkIfGameCharHitByAnyEnemy(){
    if(hitByEnemy){
        return;
    }
    for(var i=0;i<enemies.length;i++){
        var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
        if(isContact){
            hitByEnemy = true;
            enemySound.play(); // Play the enemy hit sound
             gameOver = true;
            break;
        }
    }
}

//Control game character animation when the keys are pressed
function keyPressed()
{
    //If game over does not detect anymore key
    if(gameOver){
        return;
    }

    //If statements to control the animation of the character when keys are pressed
    console.log("keyPressed: " + key);
    console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = true;
    }
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = true;
    }
    else if(keyCode == 38){
        //Ensure that the character only jump when it is touching the ground
        if(gameChar_y>=floorPos_y|| onPlatform){
            console.log("up arrow");
        //Changed to -150 so that the gameChar can reach the platform
            gameChar_y -= 150;
            jumpSound.play();
        }
    }
    
}


//Control game character animation when the keys are released
function keyReleased()
{
    //If game over dont detect anymore key
    if(gameOver){
        return;
    }
    
    //If statements to control the animation of the character when keys are released 
    console.log("keyReleased: " + key);
    console.log("keyReleased: " + keyCode);
    
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = false;
    }else if(keyCode == 39){
        console.log("right arrow");
        isRight = false;
    }
    
}

function drawCollectable(t_collectable) {
    if (!t_collectable.isFound) {
      let size = t_collectable.size;
      let x = t_collectable.x_pos;
      let y = t_collectable.y_pos;
  
      // Draw the collectable's image
      image(t_collectable.img, x - size / 2, y - size / 2, size, size);
    }
  }

  function drawUncollectable(t_uncollectable) {
    if (!t_uncollectable.isFound) {
      let size = t_uncollectable.size;
      let x = t_uncollectable.x_pos;
      let y = t_uncollectable.y_pos;
  
      // Draw the uncollectable's image
      image(t_uncollectable.img, x - size / 2, y - size / 2, size, size);
    }
  }

  
  
//Draws canyons
function drawCanyon(t_canyon){
    fill(58,48,13);
    triangle(t_canyon.x_pos, floorPos_y, (t_canyon.x_pos + t_canyon.width), floorPos_y, (t_canyon.x_pos + t_canyon.width / 2), (floorPos_y + (height - floorPos_y))+70);
    fill(87,68,8);
    triangle(t_canyon.x_pos+10, floorPos_y, (t_canyon.x_pos-10 + t_canyon.width), floorPos_y, (t_canyon.x_pos + t_canyon.width / 2), (floorPos_y + (height - floorPos_y))+70);
}



//Checks if the game character is in collectable range
function checkIfGameCharInCollectableRange(t_collectable){
    //Check if collectables have been collected
    if(t_collectable.isFound==false){
    var d = dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos)
    if(d<30){
        t_collectable.isFound=true;
        collectSound.play();
        // Check which item was collected and adjust the score accordingly
        game_score +=10;
        }
    }
}

//Checks if the game character is in uncollectable range
function checkIfGameCharInUncollectableRange(t_uncollectable){
    //Check if collectables have been collected
    if(t_uncollectable.isFound==false){
    var d = dist(gameChar_x, gameChar_y, t_uncollectable.x_pos, t_uncollectable.y_pos)
    if(d<30){
        t_uncollectable.isFound=true;
        collectSound.play();
        // Check which item was collected and adjust the score accordingly
        game_score -=10;
        }
    }
}




//Checks if game character is over canyon
function checkIfGameCharIsOverCanyon(t_canyon){
    var cond1 = gameChar_y == floorPos_y
    var cond2 = gameChar_x-gameChar_width/2>(t_canyon.x_pos)
    var cond3 = gameChar_x+gameChar_width/2<(t_canyon.x_pos+t_canyon.width)
    if(cond1 && cond2 && cond3){
            isPlummeting=true;
            fallSound.play();
    }
}

//Draws building
function drawbuilding(){
    fill(255,212,255);
    rect(building.x_pos+5,floorPos_y-400,125,400);
    fill(192,192,192)
    rect(building.x_pos+10, floorPos_y-385,40,25);
    rect(building.x_pos+85, floorPos_y-385,40,25);
    rect(building.x_pos+10, floorPos_y-325,40,25);
    rect(building.x_pos+85, floorPos_y-325,40,25);
    rect(building.x_pos+10, floorPos_y-275,40,25);
    rect(building.x_pos+85, floorPos_y-275,40,25);
    rect(building.x_pos+10, floorPos_y-225,40,25);
    rect(building.x_pos+85, floorPos_y-225,40,25);
    fill(107,84,11);
    rect(building.x_pos+43, floorPos_y-100,40,100);
    fill(182,143,16);
    rect(building.x_pos+48, floorPos_y-90,30,90);
    fill(246,202,57);
    ellipse(building.x_pos + 70, floorPos_y - 40, 5, 5);
    image(thejimImage, building.x_pos + 15, floorPos_y - 180, 100, 100);

}

    
//Check if game character reached the building
function checkIfGameCharReachbuilding(){
    if(building.isReached==false){
        var d = dist(gameChar_x,gameChar_y,building.x_pos,floorPos_y)
        if(d<10){
            building.isReached=true;
            gameOver = true;
         
        }
            
    }
}

function checkIsPlayerDead(){
    if(gameChar_y>height){
        //Decrement lives
        lives--;
        //Restart game again if there is still life
        if(lives>0){
            init();
        }else{
            //Set gameOver to true
            gameOver = true
        }
    }
}


function drawGameOver() {
    if (!gameOver) {
        return; // Do nothing if the game is not over
    }

    //positioning of text
    fill(0); 
    textAlign(CENTER, CENTER); 
    
    let message;
    // Determine the game over message based on different conditions
    if (hitByEnemy) {
        message = "The Snail Caught You— But Don't Worry, Every Step Matters So Try Again As A Stronger You! ";
        // Stop the background sound
        backgroundSound.stop();
    } else if (game_score == 100 && building.isReached) {
        message = "Congratulations Jim! Your Physical Strength And Mental Determination Has Made You Win!";
        winSound.play(); // Play the enemy hit sound
        // Stop the background sound
        backgroundSound.stop();
    } else if (timerValue == 0){
        failSound.play();
        // Stop the background sound
        backgroundSound.stop();
    }else {
        message = "Game Over, But The Attractive Collectables Await—Give It Another Go!";
        failSound.play();
        // Stop the background sound
        backgroundSound.stop();
    }
    
    
    // Estimate text size
    let textSizeValue = 200;
    textSize(textSizeValue);
    while (textWidth(message) > width * 0.9) {
        textSizeValue -= 2; // Decrease text size
        textSize(textSizeValue);
    }

    // Draw the text
    text(message, width / 2, height / 2);
    textFont(myFont);
    textSize(150);
    textAlign(CENTER, CENTER);
    fill(0);
    
}
function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
  }
