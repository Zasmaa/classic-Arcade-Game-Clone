

// Enemies our player must avoid
var Enemy = function(y, x , rate) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.y = y
    this.x = x
    this.rate = rate
    this.dis2 = 800
    this.dis1 = this.dis2 - this.y  
   

};
let enemy = new Enemy(50, 0, 300);
let enemy1 = new Enemy(215, 100, 300);
let enemy2 = new Enemy(150, 200, 350);
let allEnemies = [];
allEnemies.push(enemy, enemy1, enemy2); 
console.log(allEnemies);


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
   //console.log(enemy);
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

var asmaa = function(x, y ){
  
    //this.y = y
   //this.x =x 
    this.x = 390
    this.y = 380
  
 console.log(this.y);

    this.sprite = 'images/char-cat-girl.png'
   
};
// draw the player on the screen
asmaa.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// player update();
asmaa.prototype.update =function(){
    
   if (this.y === allEnemies.y ){
      this.x = 38
     
    if ( asmaa.x === allEnemies.x) {
        asmaa.x = 390
    }
          }
}

//player handleinput () method

asmaa.prototype.handleInput = function(keys){

//
let leftboundaries = this.x > 0
let rightboundaries = this.x <390
let downboundaries = this.y <380
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
