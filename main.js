//Your game page must have at least two player objects
//Your game must have a clear win condition
var start = 50;
var end = 550;
//var body = document.querySelector('body');
var section = document.querySelector('section');
var win = false;

/*----------------create article/section/aside for divs to go into??--------------------*/


function Player(tag,positionY,positionX,id){
	this.tag= document.createElement(tag);		//makes div
	this.tag.innerHTML = id;					//Writes name onto character
	section.append(this.tag);					//div into body
	this.positionY=positionY;									//vertical position on section
	this.tag.id= id;							//places id into div tag
	this.positionX=positionX;						//current x position (start>>>end)
}
Player.prototype.draw = function(object){
	object.fillRect(this.positionX,this.positionY, 75,75);
};
Player.prototype.move =function(){
	this.positionX ++;
	console.log('moved');
};
document.addEventListener('keydown', function(event){
	switch(event.keyCode){
		case 90: //z
			player1.move();
			console.log('z');
		break;
		case 77: //m
			player2.move();
		break;
	}
});

var player1 = new Player("div",100,start,"player1");
var player2 = new Player("div",300,start,"player2");
//player1.draw();
//player1.move();
//console.log(player1); 


/* while loop (while win==false....) */
/*
while (win===false){
	document.addEventListener('keyCode=122',hey);
}
*/
/*Reset button*/
function reset(){
	location.reload();
}
/*______________key testing stuff_________________*/
/*
document.addEventListener('keydown',function(event){			///finds the keycode of each key pressed
	console.log(event.which);
});
*/

//keydown >>key is pressed
//keyup >>>> key is released
//keypress >> character key is pressed 
//keypress "z" keyCode=90
//keypress "m" keyCode =77
//keydown "arrow right" = 39