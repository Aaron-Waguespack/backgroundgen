var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");



function setGradient() {
	body.style.background=
	"linear-gradient(to right, "
		+color1.value
		+", "
		+ color2.value
		+")";
		css.textContent = body.style.background; 
};

function randomColor() {
	ranColor=Math.random().toString(16).slice(2,8)
	return "#"+ ranColor;
	}

function addRandomColor(){
	rdColor1=randomColor()
	color1.setAttribute("value", rdColor1);
	rdColor2=randomColor()
	color2.setAttribute("value", rdColor2);	
	setGradient();
};

setGradient()

color1.addEventListener("change", setGradient);

color2.addEventListener("change", setGradient);

button.addEventListener("click", addRandomColor); //adds input event for click
