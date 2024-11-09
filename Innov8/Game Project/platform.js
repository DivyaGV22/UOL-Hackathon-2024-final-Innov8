//Define Platform object with properties
function Platform(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    
    // Draw the iceberg base
    this.draw = function() {
    fill(135, 206, 235); // Light blue colour for the iceberg base

    // Top part of the iceberg surface
    beginShape();
    vertex(this.x, this.y); 
    vertex(this.x + this.length, this.y); 
    vertex(this.x + this.length - 10, this.y + 10); 
    vertex(this.x + 10, this.y + 10); 
    vertex(this.x, this.y); 
    endShape(CLOSE);

    // Jagged, larger icy underside
    fill(10,112,132); // Blue-green for the larger icy underside
    beginShape();
    vertex(x + 10, y + 10); 
    vertex(x + 22, y + 40); 
    vertex(x + 32, y + 25); 
    vertex(x + 52, y + 45); 
    vertex(x + length - 38, y + 26); 
    vertex(x + length - 18, y + 50); 
    vertex(x + length - 10, y + 10); 
    vertex(x + 10, y + 10); 
    endShape(CLOSE);

    // Jagged, smaller icy underside
    fill(35,10,132); // Lighter blue for the smaller icy underside
    beginShape();
    vertex(x + 10, y + 10); 
    vertex(x + 20, y + 30); 
    vertex(x + 30, y + 15); 
    vertex(x + 50, y + 35); 
    vertex(x + length - 40, y + 15); 
    vertex(x + length - 20, y + 40); 
    vertex(x + length - 10, y + 10); 
    vertex(x + 10, y + 10); 
    endShape(CLOSE);
        

    // Draw the ice layer on top of the iceberg
    fill(240, 248, 255); // Colour for the ice layer

    // Ice surface
    beginShape();
    vertex(this.x, this.y); 
    vertex(this.x + this.length, this.y); 
    vertex(this.x + this.length - 10, this.y - 5); 
    vertex(this.x + 10, this.y - 5); 
    vertex(this.x, this.y); 
    endShape(CLOSE);
    };

    //Checks if game character is on platform
    this.checkContact = function(gc_x, gc_y) {
        // Check for x-axis
        if (gc_x + 20 > this.x && gc_x < this.x + 20 + this.length) {
            // Check for y-axis - game character is on the platform
            var d = this.y - gc_y;
            if (d >= 0 && d < 1) {
                return true;
            }
        }
        return false;
    };
}