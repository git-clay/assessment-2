//Your game page must have at least two player objects
//Your game must have a clear win condition
var start = 50;
var end = 550;
//var body = document.querySelector('body');
var section = document.querySelector('section');

/*----------------create article/section/aside for divs to go into??--------------------*/


function Player(tag,y,position,id){
	this.tag= document.createElement(tag);		//makes div
	this.tag.innerHTML = id;			//places "player" into div tag
	section.append(this.tag);						//div into body
	this.y=y;
	this.tag.id= id;
	this.position=position;
	this.class='player';
}

function onBoard (element,goTo){
var newObject = document.createElement(element.tag);
newObject.innderHTML=
goTo.append(element);
console.log(element.tag);

}

var player1 = new Player("div",100,start,"player1");
var player2 = new Player("div",300,start,"player2");
//player1.setAttribute('id', 'player1');
//onBoard(player1,body);

/* Create key pressed functions for each player*/
function zPressed(position){
	var element = document.getElementById("Player1");
	element.style.position=parseInt(element.style.position) +5 +'px';
}

/* while loop (while win==false....) */


/*Reset button*/
function reset(){
	location.reload();
}