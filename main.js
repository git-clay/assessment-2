//Your game page must have at least two player objects
//Your game must have a clear win condition
var start = 0;
var end = 400;
//var body = document.querySelector('body');
var section = document.querySelector('section');
var win = false;
var currentWins=0;
var p1counter =parseInt(sessionStorage.getItem('p1wins'));
var p2counter =parseInt(sessionStorage.getItem('p2wins'));


if (p1counter>0){
	section.append('Player 1: '+ p1counter);
}
if (p2counter>0){
	section.append('  '+' Player 2: '+ p2counter);
}



/*----------------create article/section/aside for divs to go into??--------------------*/
function Player(tag,positionY,positionX,id){
	this.tag= document.createElement(tag);		//makes div
	//this.tag.innerHTML = id;					//Writes name onto character
	section.append(this.tag);					//div into body
	this.positionY=positionY;									//vertical position on section
	this.tag.id= id;							//places id into div tag
	this.positionX = positionX;						//current x position (start>>>end)
	//onBoard(this);								//work on positionY...
}
var player1 = new Player("div",2,start,"player1");
var player2 = new Player("div",24,start,"player2");

function onBoard(player){
	var currentID = document.getElementById(player.tag.id);
	currentID.setAttribute("style","left:"+player.positionX+"px"); //changes X position!
	currentID.setAttribute("style","top:"+player.positionY+"%"); //changes y position!
//console.log(currentID);
}

/*________________________Functions to move players_________________*/

Player.prototype.move =function(player){				///function to moves player
	var currentID = document.getElementById(player.tag.id);
	//console.log(player.positionY);
	currentID.setAttribute("style","left:"+player.positionX+"px"); //changes X position!
	player.positionX +=20;

};
document.addEventListener('keydown', function(event){		//calls move function when key is pressed
	switch(event.keyCode){
		case 90: //z
			player1.move(player1);
				console.log("player 1 moved to "+player1.positionX);
					
		break;
		case 77: //m
			player2.move(player2);
				console.log("player 2 moved to "+player2.positionX);
		break;
	}
	if (player1.positionX >end){
		alert('Player 1 wins!');
		if(isNaN(parseInt(sessionStorage.getItem('p1wins')))===true){
		sessionStorage.setItem('p1wins', '1');
		}
		else{
		currentWins=parseInt(sessionStorage.getItem('p1wins'));
		currentWins++;
		currentWins.toString();
		console.log(currentWins);
		sessionStorage.setItem('p1wins', currentWins);
	}
}
	else if(player2.positionX >end){
		alert('Player 2 wins!');
		if(isNaN(parseInt(sessionStorage.getItem('p2wins')))===true){
		sessionStorage.setItem('p2wins', '1');
		}
		else{
		currentWins=parseInt(sessionStorage.getItem('p2wins'));
		currentWins++;
		currentWins.toString();
		console.log(currentWins);
		sessionStorage.setItem('p2wins', currentWins);
	}	
	}
});


//player1.draw();
//console.log(player1); 



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