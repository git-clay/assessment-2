//Your game page must have at least two player objects
//Your game must have a clear win condition
var start = 50;
var end = 550;

function Player(name,y,position,button){
	this.name=name;
	this.y=y;
	this.position=position;
	this.button=button;
}

function onBoard(element, location){		//element === object and location is where it is placed in html
var newObject = document.createElement(element.tag);
location.appendChild(newObject);
}


var player1 = new Player("Player 1",100,start,"z");
var player2 = new Player("Player 2",300,start,"/");

onBoard(player1,div);
onBoard(player2,div);

/*Reset button*/
function reset(){
	location.reload();
}