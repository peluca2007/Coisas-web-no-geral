const numeros = [1,2,3,4,5,6];

function executaOperacaoEmArray(array, callback) {
    array.forEach((elemento) => {
        const resultado = callback(elemento);
        console.log(resultado);
    });
}


executaOperacaoEmArray(numeros, (numero) => numero * 2);