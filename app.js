const grid = document.querySelector("#balloon-grid");

let balloonColors = [
	"red","green", "blue","pink",
    "grey","purple","orange","purple",
    "pink",'red',"black",'green',
    "brown","purple",'blue',"yellow",
    'green',"black","red","pink",
];

function popBalloon(position) {
	balloonColors[position] = null;
	render();
}

function render() {

let content = "";
var activeBalloons = 0;

balloonColors.forEach(function(color, position) {

	let visibility = "active";

	if (color === null) {
		visibility = "popped";
	}

	else {
		activeBalloons++;
	}

	content = content + `<div class="balloon ${visibility}" style="background: ${color}" onClick="popBalloon(${position})"></div>`;

});

grid.innerHTML = content;
document.querySelector('#count').innerHTML = activeBalloons;

if (activeBalloons === 0) {
	window.location.reload();
}

}


window.onload = render();








