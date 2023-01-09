//Capturar o evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit',function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector("#input-peso");
    const inputAltura = e.target.querySelector("#input-altura");
    console.log(inputPeso);

    const peso = Numeber(inputPeso.value);
});

function criaP (){
    const p = document.createElement("P");
    return p
}
function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = " ";
    const p = criaP();
    resultado.appendChild(p);
}