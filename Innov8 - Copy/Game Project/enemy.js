function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.inc = 0.5; 

    // Movement function of snail
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

        // Snail body
        fill(200, 200, 100); 
        ellipse(x - 10, y, 30, 17); 

        // Shell
        //outer shell
        fill(150, 75, 0); 
        ellipse(x+5, y-4, 25, 20);
        //inner shell 
        fill(100, 50, 0); 
        ellipse(x+5, y-4, 15, 13); 


        // Antennaes
        stroke(200, 200, 100); 
        line(x - 20, y - 5, x - 25, y - 15); 
        line(x-10, y - 5, x - 15, y - 15); 
        noStroke();

        // Eyes
        fill(255); 
        ellipse(x - 25, y-15, 4, 4); 
        ellipse(x - 15, y-15, 4, 4); 
        fill(0); 
        ellipse(x - 25, y-15 , 2, 2);
        ellipse(x - 15, y-15, 2, 2); 
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



