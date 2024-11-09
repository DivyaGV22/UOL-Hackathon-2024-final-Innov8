//Define Particle object with properties
function Particle(pos, velocity, size, colour) {
    this.pos = pos;
    this.velocity = velocity;
    this.size = size;
    this.colour = colour;
    this.age = 0; // Use to track the lifetime
    
    //Draw the particle
    this.drawParticle = function() {
        fill(this.colour);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size);
    }
    
    //Updates particle position and velocity
    this.updateParticle = function() {
        this.pos = this.pos.add(this.velocity);
        this.age++;
        
        if (this.pos.x >= width) {
            this.velocity.x = 0; 
        }
    }
}

//Define Emitter object with properties
function Emitter(xPos, yPos, xSpeed, ySpeed, size, colour) {
    this.pos = createVector(xPos, yPos);
    this.velocity = createVector(xSpeed, ySpeed);
    this.size = size;
    this.colour = colour;
    this.particles = []; // To store many particles
    
    //Initialise particle start count and lifetime 
    this.startParticles = 0;
    this.lifetime = 0;
    
    //Start emitter with initial particles
    this.startEmitter = function(startParticles, lifetime) {
        this.startParticles = startParticles;
        this.lifetime = lifetime;
       
        for (var i = 0; i < this.startParticles; i++) {
            var p = this.createNewParticle();
            this.particles.push(p);
        }
    }
    
//Create and return new particle
this.createNewParticle = function() {
    var xPos = random(-2050, floorPos_y); 
    var yPos = random(0, floorPos_y); 
    var pos = createVector(xPos, yPos);
            
    var xVel = random(1, 3); 
    var yVel = random(-0.5, 0.5); 
    var velocity = createVector(xVel, yVel);
        
    var colour = color(255, 255, 255); 
            
    var p = new Particle(pos, velocity, this.size, colour);
    return p;
}
    
//Draw and update particles
this.drawAndUpdateParticles = function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].drawParticle();
        this.particles[i].updateParticle();
            
    // Remove the particle if it's at the right edge
    if (this.particles[i].pos.x >= width) {
        this.particles.splice(i, 1);
    }
}
        
//Continuously add new particles to maintain the star field
    while (this.particles.length < this.startParticles) {
        var p = this.createNewParticle();
        this.particles.push(p);
        }
    }
}
