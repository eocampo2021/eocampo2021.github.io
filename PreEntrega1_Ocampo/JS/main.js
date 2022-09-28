//Simulador de compuertas logicas v0.1

//En esta version se realiza la simulacion de una compuerta AND y OR.
//Primero el usuario debe seleccionar el tipo de compuerta.
//Luego, debe ingresar dos valores de entrada booleanas y el simulador entregará el resultado.
//Se aplíca restricción básica de inputs. :)

alert("  Simulador de compuertas logicas v0.1")
alert("  A continuación debes seleccionar el tipo de Compuerta, y luego sus dos entradas")
let tipoCompuerta = parseInt( prompt('  1 = Compuerta tipo AND ;   2 = Compuerta tipo OR',1) );


while( tipoCompuerta != 1 && tipoCompuerta != 2 )  {
	tipoCompuerta = parseInt(prompt('Debes Seleccionar 1 o 2 (1=AND, 2=OR)',1));  
}

let inputOne = parseInt( prompt('Ingresa el valor de la primera entrada (0 o 1)',0) );
while( inputOne != 0 && inputOne != 1 )  {
	inputOne = parseInt(prompt('Debes Seleccionar el valor de la primera entrada (0 o 1): ',0));  
}

let InputTwo = parseInt( prompt('Ingresa el valor de la segunda entrada (0 o 1)',0) );
while( InputTwo != 0 && InputTwo != 1 )  {
	InputTwo = parseInt(prompt('Debes Seleccionar el valor de la segunda entrada (0 o 1): ',0));  
}

let resultadoAND = 0;
let resultadoOR = 0;

if(tipoCompuerta == 1){
    if(inputOne == 1 && InputTwo == 1 ){resultadoAND = 1}
    if(inputOne == 0 || InputTwo == 0 ){resultadoAND = 0}
   	alert('La salida de las compuerta AND es:  ' + resultadoAND );
}else{
    if(inputOne == 0 && InputTwo == 0 ){resultadoOR = 0}
    if(inputOne == 1 || InputTwo == 1 ){resultadoOR = 1}
   	alert('La salida de las compuerta OR es:  ' + resultadoOR );
}

