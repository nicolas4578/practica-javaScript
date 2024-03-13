const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//OPERADORES
//1 operacion area de un triangulo
readline.question("Ingrese la base del triangulo: ", (base)=>{
readline.question("Ingrese la altura del triangulo: ", (altura)=>{
    let resultado = parseInt(base) * (altura)/2;
    console.log(`El resultado de el area del triangulo es: ${resultado}`);

//2 operacion suma de dos numeros
readline.question("Ingrese el primer numero: ", (numero1)=>{
readline.question("Ingrese el segundo numero: ", (numero2)=>{
    let resultado = parseInt(numero1) + parseInt(numero2);
    console.log(`El resultado de la suma es ${resultado}`);

//3 operacion elevar un numero al cuadrado
readline.question("Ingrese un numero para elevarlo: ", (numero)=>{
    let resultado = parseInt(numero) * parseInt(numero);
    console.log(`el resultado de la elevacion es: ${resultado}`);

//4 operacion convertir de euros a dolares
readline.question("Ingrese el valor en euros: ", (euros)=>{
    let resultado = parseInt(euros)*1.19;
    console.log(`el resultado de ${euros} euro es en dolares: ${resultado}`);

//5 operacion area y perimetro con un lado del cuadrado
readline.question("Ingrese el valor de un lado del cuadrado: ",(valorLado)=>{
    let area = parseInt(valorLado) * parseInt(valorLado);
    let perimetro = parseInt(valorLado) *4;
    console.log(`el resultado de el area es: ${area}`);
    console.log(`el resultado de el perimetro es: ${perimetro}`);

//8 operacion promedio tres numeros
readline.question("Ingrese el valor del primer numero: " , (numero1)=>{
readline.question("Ingrese el valor del segudo numero: " , (numero2)=>{
readline.question("Ingrese el valor del tecer numero: " , (numero3)=>{
    let resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) /3;
    console.log(`El resultado del el promedio de los tres numeros es: ${resultado}`);

//CONDICIONALES
//1 condicional para saber si un numero es negativo o positivo
readline.question("Ingrese un numero:", (numero)=>{  //no se crea la variable resultado se muestra directamente 
 if (numero < 0) {
    console.log('El resultado es negativo');
      } else {
        console.log('El resultado es positivo ');
      };

//2 ingresar dos numeros y decir cual es menor y cual es mayor 
readline.question("Ingrese el numero 1: ", (numero1)=>{ //creamos una variable y se muestra desde la variable resultado
readline.question("Ingrese el numero 2: ", (numero2)=>{
    let resultado
    if (numero1 < numero2){
        resultado = "menor"
    } else if(numero1 > numero2)
        {resultado = "mayor"

    }else {resultado ="el mismo numero"}
    console.log(`el ${numero1} es: ${resultado} que el ${numero2}`);
    readline.close;
});
    });
        });
            });
                });
                    });
                        });
                            });
                                });
                                    });
                                        });
                                            });
                                                });



  
