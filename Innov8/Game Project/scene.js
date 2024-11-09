//Scene variables
var trees_x;
var trees_y;
var moon;
var clouds = [];
var mountainX;
var mountainY;
var mountainWidth;
var mountainHeight;


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
    
                   
    mountainX= 200;
    mountainY= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainR= 300;
    mountainS= 133;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainA= 200;
    mountainB= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainC= 300;
    mountainD= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainG= 300;
    mountainH= 133;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainE= 400;
    mountainF= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainJ= -20;
    mountainK= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    mountainP= -70;
    mountainQ= 233;
    mountainWidth = 200;
    mountainHeight = 400;
    
    icecapC= 300;
    icecapD= 133;
    icecapWidth= 200;
    icecapHeight= 400;   
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


//Draw the ground
function drawGround(){
    noStroke();
	fill(53, 121, 40);
	rect(0, floorPos_y, height, width - floorPos_y); 
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

//Draw the mountains using triangles
function drawMountains(){
    //1st purple mountain
    fill(153,51,255,230);
    var m_p1 = mountainP - mountainWidth/2;
    var m_q1 = mountainQ + mountainHeight/2;
    var m_p2 = mountainP
    var m_q2 = mountainQ - mountainHeight/2;
    var m_p3 = mountainP + mountainWidth/2;
    var m_q3 = mountainQ + mountainHeight/2;
    triangle(m_p1, m_q1,m_p2-40, m_q2+150,m_p3+50, m_q3);
    
    //icecap for 1st mountain
    fill(255);
    var m_r1 = mountainR - mountainWidth/2;
    var m_s1 = mountainS + mountainHeight/2;
    var m_r2 = mountainR
    var m_s2 = mountainS - mountainHeight/2;
    var m_r3 = mountainR + mountainWidth/2;
    var m_s3 = mountainS + mountainHeight/2;
    triangle(m_r1-330, m_s1-70,m_r2-410, m_s2+250,m_r3-500, m_s3-120);
    
    //2nd purple mountain
    fill(204,153,255,230);
    var m_j1 = mountainJ - mountainWidth/2;
    var m_k1 = mountainK + mountainHeight/2;
    var m_j2 = mountainJ
    var m_k2 = mountainK - mountainHeight/2;
    var m_j3 = mountainJ + mountainWidth/2;
    var m_k3 = mountainK + mountainHeight/2;
    triangle(m_j1, m_k1,m_j2+40, m_k2+250,m_j3+50, m_k3);
    
    //icecap for 2nd mountain
    fill(255);
    var i_c1 = icecapC - icecapWidth/2;
    var i_d1 = icecapD + icecapHeight/2;
    var i_c2 = icecapC
    var i_d2 = icecapD - icecapHeight/2;
    var i_c3 = icecapC + icecapWidth/2;
    var i_d3 = icecapD + icecapHeight/2;
    triangle(i_c1-265, i_d1+40,i_c2-280, i_d2+350,i_c3-370, i_d3+10);
    
     //3rd purple mountain
    fill(207,175,226,200);
    var m_a1 = mountainA - mountainWidth/2;
    var m_b1 = mountainB + mountainHeight/2;
    var m_a2 = mountainA
    var m_b2 = mountainB - mountainHeight/2;
    var m_a3 = mountainA + mountainWidth/2;
    var m_b3 = mountainB + mountainHeight/2;
    triangle(m_a1-170, m_b1,m_a2-100, m_b2+300,m_a3+100, m_b3);
    
    //4th purple mountain
    fill(135,48,186,200);
    var m_x1 = mountainX - mountainWidth/2;
    var m_y1 = mountainY + mountainHeight/2;
    var m_x2 = mountainX
    var m_y2 = mountainY - mountainHeight/2;
    var m_x3 = mountainX + mountainWidth/2;
    var m_y3 = mountainY + mountainHeight/2;
    triangle(m_x1-80, m_y1,m_x2+100, m_y2+150,m_x3+100, m_y3);
    
    //5th purple mountain
    fill(171,101,212,230);
    var m_c1 = mountainC - mountainWidth/2;
    var m_d1 = mountainD + mountainHeight/2;
    var m_c2 = mountainC
    var m_d2 = mountainD - mountainHeight/2;
    var m_c3 = mountainC + mountainWidth/2;
    var m_d3 = mountainD + mountainHeight/2;
    triangle(m_c1, m_d1,m_c2+80, m_d2+50,m_c3+50, m_d3);
    
    //icecap for 5th mountain
    fill(255);
    var m_g1 = mountainG - mountainWidth/2;
    var m_h1 = mountainH + mountainHeight/2;
    var m_g2 = mountainG
    var m_h2 = mountainH - mountainHeight/2;
    var m_g3 = mountainG + mountainWidth/2;
    var m_h3 = mountainH + mountainHeight/2;
    triangle(m_g1+170, m_h1-200,m_g2+80, m_h2+150,m_g3-4, m_h3-170);
    
    //6th purple mountain
    fill(163,68,218);
    var m_e1 = mountainE - mountainWidth/2;
    var m_f1 = mountainF + mountainHeight/2;
    var m_e2 = mountainE
    var m_f2 = mountainF - mountainHeight/2;
    var m_e3 = mountainE + mountainWidth/2;
    var m_f3 = mountainF + mountainHeight/2;
    triangle(m_e1, m_f1,m_e2+40, m_f2+250,m_e3+50, m_f3);
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