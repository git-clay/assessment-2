//Your game page must have at least two player objects
//Your game must have a clear win condition
var start = 50;
var end = 550;
var body = document.querySelector('body');


function Player(tag,y,position,id){
	this.tag= document.createElement(tag);
	this.y=y;
	this.id= id;
	this.position=position;
	this.class='player';
}
function onBoard(element, location){		//element === object and location is where it is placed in html
var newObject = document.createElement(element.tag.val);
location.append(newObject);
}


var player1 = new Player("div",100,start,"1");
var player2 = new Player("div",300,start,"2");

onBoard(player1,body);
onBoard(player2,body);

/* Create key pressed functions for each player*/
function zPressed(position){
	var element = document.getElementById("1");
	element.style.position=parseInt(element.style.position) +5 +'px';
}

/* while loop (while win==false....) */

/*Reset button*/
function reset(){
	location.reload();
}