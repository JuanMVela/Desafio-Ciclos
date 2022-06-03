let sumaNotas = 0;
let nombre = prompt ("ingresa tu nombre")
console.log(`${nombre}`)
alert(`Hola ${nombre}, ingresa las notas para calcular el promedio`)
const TOTAL_NOTAS = Number(prompt("Ingrese la cantidad de notas deseadas"));

for (let i = 1; i <= TOTAL_NOTAS; i++) {
  let nota = Number(prompt("Ingrese una nota"));  
   switch (true) {          
      case nota >= 1 && nota <= 5:
        console.log(`Ingresaste nota = ${nota}`)
        alert(`Ingresaste nota ${nota} = Desaprobado`)
        sumaNotas = sumaNotas + nota;
        break;
      case nota >= 6 && nota <= 7:
        console.log(`Ingresaste nota = ${nota}`)
        alert(`Ingresaste nota ${nota} = Aprobado`)
        sumaNotas = sumaNotas + nota;
        break;
      case nota >= 8 && nota <= 10:
        console.log(`Ingresaste nota = ${nota}`)
        alert(`Ingresaste nota ${nota} = Sobresaliente`)
        sumaNotas = sumaNotas + nota;
        break;   
      default:
        alert(`Ingresaste nota ${nota} = Valor incorrecto`)        
    }
}

let promedio = sumaNotas / TOTAL_NOTAS;
console.log(`Suma de notas ingresadas = ${sumaNotas}`);
console.log(`Promedio de notas ingresadas = ${promedio}`);
alert(`Ingresaste (${TOTAL_NOTAS}) notas:\nLa suma total de notas ingresadas es = ${sumaNotas} \nEl promedio es = ${promedio}`)



