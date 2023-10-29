const prompt = require('prompt-sync')();

do{
console.log(
    "Bienvenido al menu de Calculadora\n",
    "1: Para realizar una suma\n",
    "2: Para realizar una resta\n",
    "3: Para realizar una multiplicacion\n",
    "4: Para realizar una division\n",
    "0: Para salir"
);

var op = prompt("Ingrese una opcion: ");

switch(op){
    case '1':
        const num1 = parseInt(prompt("Ingrese el primer digito: "));
        const num2 = parseInt(prompt("Ingrese el segundo digito: "));
        const suma = num1 + num2;
        console.log(`El resultado es: ${suma}`);
        break;
    case '2':
        let num3 = parseInt(prompt("Ingrese el primer digito: "));
        let num4 = parseInt(prompt("Ingrese el segundo digito: "));
        let resta = num3 - num4;
        console.log(`El resultado es: ${resta}`);
        break;
    case '3': 
        let num5 = parseInt(prompt("Ingrese el primer digito: "));
        let num6 = parseInt(prompt("Ingrese el segundo digito: "));
        let producto = num5 * num6;
        console.log(`El resultado es: ${producto}`);
        break;
    case '4': 
        let num7 = parseInt(prompt("Ingrese el dividendo: "));
        let num8 = parseInt(prompt("Ingrese el divisor: "));
        while(num8 === 0){
            console.log("El divisor no puede ser igual a cero, vuelva a ingresar")
            num8 = parseInt(prompt("Ingrese el divisor: "));
        }
        let cociente = num7 / num8;
        console.log(`El resultado es: ${cociente}`);
        break;
    default:
        console.log("Ingrese una opcion valida");
        break;
}

}while(op != '0');