
/*var nome ="Namuj";

var idade = 32;
var idade2 = 2;
var d= new Date();
var lista = ["maçã","limão","uva"];
var animal ={nome:"Leão", patas:3,especie:"felino"};

function divisao(n1,n2){
	
	return n1/n2;
	
}

alert(divisao(5,5));

var numero= prompt("Escolha um número:");
	alert(d);

do{
if(numero==1){
	alert("acertou");
}else{
		alert("errou");
};
numero--;
}while(numero!=0);*/

let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra =[];
cobra[0]={
	x:8*box,
	y:8*box
}
let direcao = "right";

let comida={
	x:Math.floor(Math.random()*15+1)*box,
	y:Math.floor(Math.random()*15+1)*box
}

function criarField(){
	context.fillStyle= "lightgreen";
	context.fillRect(0,0,16 * box, 16 * box);
	
	
}
function criarCobrinha(){
	for(i=0; i< cobra.length; i++){
		context.fillStyle="green";
		context.fillRect(cobra[i].x,cobra[i].y,box,box);
	}
	
	
}

function criarComida(){
	context.fillStyle="red";
	context.fillRect(comida.x, comida.y,box,box);
}

document.addEventListener('keydown',atualizar);

function atualizar (event){
	if(event.keyCode==37 && direcao !="right") direcao="left";
	if(event.keyCode==38 && direcao !="down") direcao="up";
	if(event.keyCode==39 && direcao !="left") direcao="right";
	if(event.keyCode==40 && direcao !="up") direcao="down";
	
}

function iniciarJogo(){
	
	
	
	if(cobra[0].x >15*box && direcao=="right") cobra[0].x=0;
	if(cobra[0].x <0 && direcao=="left") cobra[0].x=16*box;
	if(cobra[0].y >15*box && direcao=="down") cobra[0].y=0;
	if(cobra[0].y <0 && direcao=="up") cobra[0].y=16*box;
	
	for(i=1;i<cobra.length;i++){
		if(cobra[0].x==cobra[i].x && cobra[0].y==cobra[i].y){
			clearInterval(jogo);
			alert("Game Over =/ ");
		}
	}
	
	criarField();
	criarCobrinha();
	criarComida();
	
	let cobraX = cobra[0].x;
	let cobraY = cobra[0].y;
	
	if(direcao=="right") cobraX+=box;
	if(direcao=="left") cobraX-=box;
	if(direcao=="up") cobraY-=box;
	if(direcao=="down") cobraY+=box;
	
	if(cobraX !=comida.x || cobraY != comida.y){
		cobra.pop();
	}else{
		comida.x=Math.floor(Math.random()*15+1)*box;
		comida.y=Math.floor(Math.random()*15+1)*box;
		
	}
	
	
	
	
	let newHead={
		x:cobraX,
		y:cobraY
	}
	
	cobra.unshift(newHead);
	
}
let jogo = setInterval(iniciarJogo,100);