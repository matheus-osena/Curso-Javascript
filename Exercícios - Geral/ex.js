//Escreva uma função que receba 2 números e retorne o maior deles.

function maior (a,b){
    const numero1 = Number(a);
    const numero2 = Number(b);

    if (numero1 >= numero2) {
        return numero1;
    } else{
        return numero2;
    }
};

console.log(maior(11,10));