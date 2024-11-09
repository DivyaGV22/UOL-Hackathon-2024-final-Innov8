function drawGameCharIsLeftAndIsFalling()
{
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    //hands
    fill(200,150,150);
    ellipse(gameChar_x - 20, gameChar_y - 33,8,8);
    ellipse(gameChar_x + 20, gameChar_y - 8,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 10, gameChar_y, 15,7);
    ellipse(gameChar_x + 5, gameChar_y, 15,7);
    ///eyes
    fill(0);
    ellipse(gameChar_x - 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x - 8,gameChar_y - 51,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x - 15,gameChar_y - 45,2,4);
    ellipse(gameChar_x - 8,gameChar_y - 36,8,5);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}


function drawGameCharIsRightAndIsFalling()
{   
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    //hands
    fill(200,150,150);
    ellipse(gameChar_x - 20, gameChar_y - 8,8,8);
    ellipse(gameChar_x + 20, gameChar_y - 33,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 4, gameChar_y, 15,7);
    ellipse(gameChar_x + 10, gameChar_y, 15,7);
    //eyes
    fill(0);
    ellipse(gameChar_x + 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x + 8,gameChar_y - 51,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x + 12,gameChar_y - 45,2,4);
    ellipse(gameChar_x + 8,gameChar_y - 36,8,5);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}
	

function drawGameCharIsLeft()
{
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    //left hand
    fill(200,150,150);
    ellipse(gameChar_x - 16, gameChar_y - 17,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //right hand
    fill(200,150,150);
    ellipse(gameChar_x + 16, gameChar_y - 17,8,8);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 10, gameChar_y, 15,7);
    ellipse(gameChar_x + 5, gameChar_y, 15,7);
    //eyes
    fill(0);
    ellipse(gameChar_x - 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x - 8,gameChar_y - 51,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x-15,gameChar_y - 45,2,4);
    rect(gameChar_x - 10,gameChar_y - 36,5,2);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}
	

function drawGameCharIsRight()
{
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    //right hand
    fill(200,150,150);
    ellipse(gameChar_x + 16, gameChar_y - 17,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //left hand
    fill(200,150,150);
    ellipse(gameChar_x - 15, gameChar_y - 17,8,8);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 4, gameChar_y, 15,7);
    ellipse(gameChar_x + 10, gameChar_y, 15,7);
    //eyes
    fill(0);
    ellipse(gameChar_x + 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x + 8,gameChar_y - 51,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x + 12,gameChar_y - 45,2,4);
    rect(gameChar_x + 5,gameChar_y - 36,5,2);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}


function drawGameCharIsFallingOrIsPlummeting()
{
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    ellipse(gameChar_x - 15, gameChar_y - 45,7);
    ellipse(gameChar_x + 15, gameChar_y - 45,7);
    //hands
    fill(200,150,150);
    ellipse(gameChar_x - 20, gameChar_y - 30,8,8);
    ellipse(gameChar_x + 20, gameChar_y - 30,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 8, gameChar_y, 15,7);
    ellipse(gameChar_x + 10, gameChar_y, 15,7);
    //eyes
    fill(0);
    ellipse(gameChar_x + 7,gameChar_y - 50,5,5);
    ellipse(gameChar_x - 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x + 7,gameChar_y - 49,2,2);
    ellipse(gameChar_x - 7,gameChar_y - 49,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x-1,gameChar_y - 45,2,4);
    ellipse(gameChar_x ,gameChar_y - 36,7,5);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}


function drawGameCharStandingFront()
{
    //head and ears
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 45,30);
    ellipse(gameChar_x - 15, gameChar_y - 45,7);
    ellipse(gameChar_x + 15, gameChar_y - 45,7);
    //hands
    fill(200,150,150);
    ellipse(gameChar_x - 20, gameChar_y - 17,8,8);
    ellipse(gameChar_x + 20, gameChar_y - 17,8,8);
    //body
    fill(255,0,0);
    rect(gameChar_x - 15, gameChar_y - 30,30,20);
    //shirt design
    fill(0);
    rect(gameChar_x - 1, gameChar_y - 30,3,20);
    rect(gameChar_x - 5, gameChar_y - 30,10,4);
    rect(gameChar_x -15, gameChar_y -15,30,2);
    fill(255);
    ellipse(gameChar_x - 5, gameChar_y - 23,3,3);
    ellipse(gameChar_x - 5, gameChar_y - 19,3,3);
    rect(gameChar_x - 15, gameChar_y - 14,30,1);
    //feet
    fill(0);
    rect(gameChar_x - 11, gameChar_y - 10, 10,10);
    rect(gameChar_x + 2, gameChar_y - 10, 10,10);
    ellipse(gameChar_x - 8, gameChar_y, 15,7);
    ellipse(gameChar_x + 10, gameChar_y, 15,7);
    //eyes
    fill(0);
    ellipse(gameChar_x + 7,gameChar_y - 50,5,5);
    ellipse(gameChar_x - 7,gameChar_y - 50,5,5);
    fill(255);
    ellipse(gameChar_x + 7,gameChar_y - 49,2,2);
    ellipse(gameChar_x - 7,gameChar_y - 49,2,2);
    //nose and mouth
    fill(0);
    rect(gameChar_x-1,gameChar_y - 45,2,4);
    rect(gameChar_x - 5,gameChar_y - 36,10,2);
    //hat
    fill(0);
    ellipse(gameChar_x, gameChar_y - 58,30,7);
    rect(gameChar_x - 10, gameChar_y - 70,20,10);
}