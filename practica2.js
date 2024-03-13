const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function menuPrincipal() {              //Aqui le estamos preguntando al usuario que accion quiere realizar
    console.log("Seleccione una opcion");       
    console.log("1: operadores");
    console.log("2: condicionales");
    console.log("3: ciclos");
    console.log("4: salir");
}

function operadores(){                  //Aqui se pregunta que operador quiere escoger si en el menu principal fue uno
    console.log("Seleccione una operacion;: ");
    console.log("1: area de un triangulo");
    console.log("2: suma de dos numeros");  
    console.log("3: elevar un numero al cuadrado"); 
    console.log("4: convertir de euros a dolares"); 
    console.log("5: area y perimetro de un lado del cuadrado"); 
    console.log("6: area y volumen de un cilindro");
    console.log("7: radio de una circunferencia y de el valor de la longitud");
    console.log("8: promedio de tres notas");  
}

function condicionales(){                 //Aqui se pregunta que condicional quiere escoger si en el menu principal escoge 2
    console.log("Seleccione una operacion: ");
    console.log("1: verificar si un numero es positivo o negativo"); 
    console.log("2: comparar dos numeros y determinar el mayor y menor"); 
}

function ejecutarMenuPrincipal(){
    readline.question("Seleccione una opcion principal", (opcion)=>{
        switch (opcion){
            case '1':
                operadores();
                ejecutarOperadores();
                break;
            
            case '2':
                condicionales();
                ejecutarCondicionales();
                break;
            
            case '3':
                console.log("Funcionalidad de ciclos aún no implementada.");
                menuPrincipal();
                break;
        
            case '4':
                console.log("Saliendo...");
                readline.close();
                break;
                default:
                    console.log("Opción no válida. Por favor, seleccione una opción válida.");
                    menuPrincipal();
                    ejecutarMenuPrincipal();
        }
    });

}
//OPERADORES
function ejecutarOperadores(){
    readline.question("Seleeccione una opcion de la lista: ",(opcion)=>{
        switch (opcion){

            case '1': //area de un triangulo
                readline.question("Ingrese la base del triangulo: ", (base)=>{
                readline.question("Ingrese la altura del triangulo: ", (altura)=>{
                    let resultado = parseInt(base) * (altura)/2;
                    console.log(`El resultado de el area del triangulo es: ${resultado}`);
                    ejecutarMenuPrincipal();
                });
                    });
            break;

            case '2': //suma de dos numeros 
                readline.question("Ingrese el primer numero: ", (numero1)=>{
                readline.question("Ingrese el segundo numero: ", (numero2)=>{
                    let resultado = parseInt(numero1) + parseInt(numero2);
                    console.log(`El resultado de la suma es ${resultado}`);
                    ejecutarMenuPrincipal();
                });
                    });
            break;

            case '3': //elevar un numero al cuadrado
                readline.question("Ingrese un numero para elevarlo: ", (numero)=>{
                    let resultado = parseInt(numero) * parseInt(numero);
                    console.log(`el resultado de la elevacion es: ${resultado}`);
                ejecutarMenuPrincipal();
            });
            break;

            case '4': //de euros a dolares
                readline.question("Ingrese el valor en euros: ", (euros)=>{
                    let resultado = parseInt(euros)*1.19;
                    console.log(`el resultado de ${euros} euro es en dolares: ${resultado}`);
                ejecutarMenuPrincipal();
            });
            break;

            case '5': //area y perimetro con un lado del cuadrado
                readline.question("Ingrese el valor de un lado del cuadrado: ",(valorLado)=>{
                    let area = parseInt(valorLado) * parseInt(valorLado);
                    let perimetro = parseInt(valorLado) *4;
                    console.log(`el resultado de el area es: ${area}`);
                    console.log(`el resultado de el perimetro es: ${perimetro}`);
                    ejecutarMenuPrincipal();
            });
            break;

            case '6'://area y volumen de un cilindro

                ejecutarMenuPrincipal();
            break;
            
            case '7'://longitud del radio de una circunferecia y area del circulo inscrito

                ejecutarMenuPrincipal();
            break;

            case '8'://promedio de tres numeros
                readline.question("Ingrese el valor del primer numero: " , (numero1)=>{
                readline.question("Ingrese el valor del segudo numero: " , (numero2)=>{
                readline.question("Ingrese el valor del tecer numero: " , (numero3)=>{
                    let resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) /3;
                    console.log(`El resultado del el promedio de los tres numeros es: ${resultado}`);
                ejecutarMenuPrincipal();
            });
                });
                    });
            break;
        }
    });

}

//CONDICIONALES
function ejecutarCondicionales() {
    readline.question("Seleccione una operación de la lista: ", (opcion) => {
        switch (opcion) {
            case '1':
                readline.question("Ingrese un número: ", (numero) => {
                    const resultado = parseInt(numero) >= 0 ? "positivo" : "negativo";
                    console.log(`El número ingresado es ${resultado}`);
                    ejecutarMenuPrincipal();
                });
                break;
            case '2':
                readline.question("Ingrese el primer número: ", (numero1) => {
                readline.question("Ingrese el segundo número: ", (numero2) => {
                    if (parseInt(numero1) > parseInt(numero2)) {
                        console.log(`${numero1} es mayor que ${numero2}`);
                    } else if (parseInt(numero1) < parseInt(numero2)) {
                        console.log(`${numero1} es menor que ${numero2}`);
                    } else {
                        console.log("Los números son iguales");
                    }
                    ejecutarMenuPrincipal();
                });
            });
            break;
            default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            mostrarMenuCondicionales();
            ejecutarCondicionales();
        }
    });
}
menuPrincipal();
ejecutarMenuPrincipal();
        
