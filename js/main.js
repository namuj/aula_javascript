
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

criarField();
criarCobrinha();