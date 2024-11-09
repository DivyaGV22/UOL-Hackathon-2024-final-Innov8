// //Define Enemy object with properties
// function Enemy(x,y,range){
//     this.x = x;
//     this.y = y;
//     this.range = range;
    
//     this.currentX = x;
//     this.inc = 1;
    
//     //Draw the enemy
//     this.update = function(){
//         this.currentX += this.inc;
//         if(this.currentX > this.x + this.range){
//             this.inc = -1;
//         }
//         else if(this.currentX < this.x){
//             this.inc = 1;
//         }
//     }
    
//     this.drawRabbit = function(x, y) {
//         //Main body
//         fill(255); // White colour
//         ellipse(x, y, 18, 20); 
//         fill(255); 
//         ellipse(x, y+5, 25, 13); 
        
//         // Inner grey part
//         fill(200); // Light grey colour for the inner body
//         ellipse(x, y, 12, 15); // Inner grey part of the body

//         // Head
//         fill(200);
//         ellipse(x, y - 15, 30, 21); // Head
//          fill(255); // White colour
//         ellipse(x, y-10, 33, 15); // Main body

//         // Ears
//         fill(255); // White colour

//         // Left Ear
//         push(); 
//         translate(x - 8, y - 30); 
//         rotate(radians(-20)); // Tilt the ear by -20 degrees
//         ellipse(0, 0, 8, 20); // Draw the left ear
//         pop(); 

//         // Right Ear
//         push(); 
//         translate(x + 8, y - 30); 
//         rotate(radians(20)); // Tilt the ear by 20 degrees
//         ellipse(0, 0, 8, 20); // Draw the right ear
//         pop(); 

//         // Inner ears (pink)
//         fill(255, 192, 203); // Light pink colour for the inner ears

//         // Inner Left Ear
//         push(); 
//         translate(x - 8, y - 30); 
//         rotate(radians(-20)); // Tilt the ear by -20 degrees
//         ellipse(0, 0, 6, 14); // Draw the inner left ear
//         pop(); 

//         // Inner Right Ear
//         push(); 
//         translate(x + 8, y - 30); 
//         rotate(radians(20)); // Tilt the ear by 20 degrees
//         ellipse(0, 0, 6, 14); // Draw the inner right ear
//         pop(); 

//         // Eyes
//         fill(0); // Black colour
//         ellipse(x - 5, y - 18, 4, 8); // Left eye
//         ellipse(x + 5, y - 18, 4, 8); // Right eye

//         // Inner white spots for eyes
//         fill(255); // White colour
//         ellipse(x - 5, y - 20, 2, 4); // Left eye white spot
//         ellipse(x + 5, y - 20, 2, 4); // Right eye white spot
        
//          // Blush
//         fill(255, 211, 236); // Light pink colour for blush
//         ellipse(x - 9, y - 12, 8, 6); // Left cheek blush
//         ellipse(x + 9, y - 12, 8, 6); // Right cheek blush
        
//         // Nose
//         fill(252, 105, 180); // Pink colour
//         ellipse(x, y - 13, 3, 3); 

//         // Mouth
//         noFill();
//         arc(x, y - 5, 10, 8, 0, PI); 

//         // Feet
//         fill(200); // White colour
//         ellipse(x - 10, y + 10, 10, 5); // Left foot
//         ellipse(x + 10, y + 10, 10, 5); // Right foot
//     };

//     //Draw and update rabbit's position
//     this.draw = function() {
//         this.update();
//         fill(255, 0, 0); // Background colour
//         this.drawRabbit(this.currentX, this.y);
//     };
    
//     //Check contact with rabbit
//     this.checkContact = function(gc_x,gc_y){
//         var d = dist(gc_x, gc_y, this.currentX, this.y);
//         if(d<20){
//             return true;
//         }
//         return false;
//     }
// }
function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.inc = 0.5; // Slow movement speed for the snail

    // Update function for movement
    this.update = function() {
        this.currentX += this.inc;
        if (this.currentX > this.x + this.range) {
            this.inc = -0.5;
        } else if (this.currentX < this.x) {
            this.inc = 0.5;
        }
    };

    // Draw the snail
    this.drawSnail = function(x, y) {
        // Shell
        fill(150, 75, 0); // Brown color for the shell
        ellipse(x, y - 5, 20, 20); // Shell body
        fill(100, 50, 0); // Darker brown for shell spiral
        ellipse(x, y - 5, 10, 10); // Inner spiral of the shell

        // Snail body
        fill(200, 200, 100); // Light yellow color for the body
        ellipse(x - 10, y, 20, 10); // Main body

        // Eyes/Antennae
        fill(255); // White color for the eye base
        ellipse(x - 15, y - 10, 4, 4); // Left eye base
        ellipse(x - 5, y - 10, 4, 4); // Right eye base
        fill(0); // Black for eye pupils
        ellipse(x - 15, y - 10, 2, 2); // Left pupil
        ellipse(x - 5, y - 10, 2, 2); // Right pupil

        // Antennae
        stroke(200, 200, 100); // Light yellow color for the antennae
        line(x - 10, y - 5, x - 15, y - 15); // Left antenna
        line(x, y - 5, x - 5, y - 15); // Right antenna
        noStroke();
    };

    // Draw and update snail's position
    this.draw = function() {
        this.update();
        fill(255, 0, 0); // Background color
        this.drawSnail(this.currentX, this.y);
    };

    // Check contact with the snail
    this.checkContact = function(gc_x, gc_y) {
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if (d < 20) {
            return true;
        }
        return false;
    };
}
