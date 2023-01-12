const dataMostrar = function () {

    const dataHoje = new Date();
    const mostrarData = document.querySelector(".data");

    
    const dia = dataHoje.getDate();
    const mes = dataHoje.getMonth();
    const ano = dataHoje.getFullYear();
    const horas = dataHoje.getHours();
    const minutos = dataHoje.getMinutes();
    const segundos = dataHoje.getSeconds();




    mostrarData.innerHTML = `${dia}/${mes+1}/${ano} ${horas}:${minutos}:${segundos}`
    console.log(`${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`)
}

dataMostrar();



