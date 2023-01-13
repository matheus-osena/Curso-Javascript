const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".Iniciar");
const pausar = document.querySelector(".Pausar");
const zerar = document.querySelector(".Zerar");
let segundos = 0;
let contando = true;


function horaaPartirdosSegundos(segundos){
    let hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    })
};

function contandoAHora(){
    if (contando === true)
    {relogio.innerHTML = horaaPartirdosSegundos(segundos);
    segundos++;};
}

iniciar.addEventListener('click', function (event) {
    contando = true;
    setInterval(contandoAHora,1000);
});
       

pausar.addEventListener('click', function (event) {
    contando = false;
   
});

zerar.addEventListener('click', function (event) {
    segundos=0;
    setTimeout(contandoAHora,0);
    contando= false;
    segundos = 0;   
   
});