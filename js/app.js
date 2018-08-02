

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.y = 100
    this.x = 0
    

};
let enemy = new Enemy(0,50);
let enemy1 = new Enemy(150,0);
let enemy2 = new Enemy
let allEnemies = [];
allEnemies.push(enemy,enemy1); 

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if ( this.x < this.dis2){
            this.x += this.rate * dt 
    if ( this.x > this.dis2) {
        this.x = 0
    }
   
           }

    
    

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// initalizing all enemies

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var asmaa = function(){
   this.x = 400;
    this.y = 400;
    
    this.sprite = 'images/char-boy.png'
   
}
// draw the player on the screen
asmaa.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player handleinput () method

asmaa.prototype.handleInput = function(keys){

//
let leftboundaries = this.x > 0
let rightboundaries = this.x <400
let downboundaries = this.y <400
let upboundaries = this.y >0
if (keys == 'left' && leftboundaries ) {
    this.x -= 101 
}
if(keys == 'right' && rightboundaries){
    this.x += 101
}
if (keys == 'down' && downboundaries) {
    this.y += 83
}

if (keys == 'up' && upboundaries) {
    this.y -= 83
}

console.log(keys)

};
player = new asmaa();

// update position



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
