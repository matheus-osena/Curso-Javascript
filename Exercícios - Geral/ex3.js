//Escreva uma função que recebe o número e rtorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número Não é divisível por 3 e 5 = Retorna ele mesmo
//Checar se o número é realmente um número
//Use a função com núemro de 0 a 100

function FizzBuzz(numeroe) {
    const numero = numeroe;
    if (numero === NaN) {
        return numero;
    };
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else {
        return numero;
    }

};

let i = 0;
while (i <= 100) {
    console.log(FizzBuzz(i));
    i++;
};
