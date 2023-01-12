// Faça uma função eImagem
//Deve recer altura e largura e responder se a imagem está em modo paisagem;

function eImagem(altura1, largura1) {
    const altura = Number(altura1);
    const largura = Number(largura1);

    if (largura > altura) {
        return true;
    };
    return false;
};


console.log(eImagem(100,200));
console.log(eImagem(200,100));