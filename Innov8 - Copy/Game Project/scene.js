//Scene variables
var trees_x;
var trees_y;
var moon;
var clouds = [];



//Sets up scene with multiple scene variables
function setupScene()
{
    floorPos_y = height * 3/4;
    trees_x = [150,500,750]; 
    trees_y = floorPos_y - 50; 
    
    clouds=[{pos_x:random(width),pos_y:random(20,100),size:random(50,80)}, 
            {pos_x:random(10,width),pos_y:random(100,200),size:random(50,80)}, 
            {pos_x:random(10,width),pos_y:random(200,250),size:random(50,80)},
           {pos_x:random(10,width),pos_y:random(80,250),size:random(50,80)}];
    
                   
    
}

//For loop iterates over the clouds array to animate clouds
function animateClouds() {
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].pos_x += 1; 
        if (clouds[i].pos_x > width) {
            clouds[i].pos_x = -clouds[i].size; 
        }
    }
}

//Draw the clouds
drawClouds();

//Draw the clouds using ellipses
function drawCloud(t_cloud) {
    noStroke();
    
    //Outer grey cloud body
    fill(200, 200, 200); 
    ellipse(t_cloud.pos_x, t_cloud.pos_y, t_cloud.size * 1.2, t_cloud.size * 1.2);
    ellipse(t_cloud.pos_x - 40, t_cloud.pos_y, t_cloud.size*0.9, t_cloud.size*0.9);
    ellipse(t_cloud.pos_x + 40, t_cloud.pos_y, t_cloud.size*0.7, t_cloud.size*0.7);
    
    //Inner white cloud body
    fill(243, 238, 238); 
    ellipse(t_cloud.pos_x, t_cloud.pos_y, t_cloud.size * 1, t_cloud.size * 1);
    ellipse(t_cloud.pos_x - 40, t_cloud.pos_y, t_cloud.size*0.8, t_cloud.size*0.8);
    ellipse(t_cloud.pos_x + 40, t_cloud.pos_y, t_cloud.size*0.6, t_cloud.size*0.6);
    
}


//Draw trees
drawTrees();

//Draw the trees using rectangles and triangles
function drawTree(pos_x, pos_y){
    noStroke();
    fill(120,100,40);
    rectMode(CENTER);
   rect(pos_x, pos_y, 40, 100);
    rectMode(CORNER);
    fill(54,118,54);
    var x1 = pos_x-80;
    var y1 = pos_y-50;
    var x2 = pos_x;
    var y2 = pos_y-150;
    var x3 = pos_x+80;
    var y3 = pos_y-50;
    triangle(x1,y1,x2,y2,x3,y3);
    fill(42,105,42);
    triangle(x1,y1-50,x2,y2-50,x3,y3-50);
    fill(255,255,51);
    triangle(x1+50,y1-170,x2,y2-55,x3-50,y3-170);
    fill(255,255,51);
    triangle(x1+60,y1-140,x2,y2-90,x3-70,y3-160);
    fill(255,255,51);
    triangle(x1+100,y1-140,x2,y2-90,x3-90,y3-160);
}


//Draw the moon using ellipses
function drawMoon() {
    // Draw the glow
    noStroke();
    fill(255, 255, 204, 100); 
    ellipse(50, 50, 90, 90); 

    // Draw the moon
    fill(255, 255, 204); 
    ellipse(50, 50, 80, 80); 

    // Draw the dark crater
    fill(45, 90, 129); 
    ellipse(80, 50, 80, 80);
}




//For loop iterates over the trees array to draw trees
    function drawTrees(){
    for (var i = 0; i < trees_x.length; i++) {
        drawTree(trees_x[i], trees_y);
    }
    }

//Draws array of clouds
function drawClouds(){
    drawCloud(clouds[0]);
    drawCloud(clouds[1]);
    drawCloud(clouds[2]);
    drawCloud(clouds[3]);
}



//Factory design pattern of platform
function createPlatform(x,y,length){
    return new Platform(x,y,length);
}

//Add drawPlatform() function
function drawPlatforms(){
    for(var i=0;i<platforms.length;i++){
        platforms[i].draw();
    }
}

//Add createEnemy
function createEnemy(x,y,range){
    return new Enemy(x,y,range);
}

//Add drawEnemies
function drawEnemies(){
    //Draw enemies
    for(var i=0;i<enemies.length;i++){
        enemies[i].draw();
    }
}