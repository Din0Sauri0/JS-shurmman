//Funciones en JS
/*
function iterar(arg) {
    for(let i = 0; i<arg.length;i++){
        console.log(arg[i]);
    }
}

const numeros = [1, 2, 3, 4, 5];
const nombres = ['pedro', 'juan', 'felipe', 'chanchito feliz', 'chanchito triste'];
iterar(numeros);
iterar(nombres);
*/
/*
function suma(a, b){
    return a + b;
}

const resultadoSuma1 = suma(1,2);
const resultadoSuma2 = suma(5, 6);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2)
console.log(resultadoSuma3);
*/

function sumar(a, b, cb){
    const r = a+b;
    cb(r);
}

function callback(result){
    console.log('resultado', result);
}

sumar(2, 3, callback);

