const contexto = document.querySelector(".contexto");
const elementos = [
    {tag: "p", texto:"Frase 1"},
    {tag: "div", texto:"Frase 2"},
    {tag: "footer", texto:"Frase 3"},
    {tag: "section", texto:"Frase 4"},
];

let conteudo = '';

for (i = 0; i < elementos.length;i++){
    var {tag,texto} = elementos[i] 
    conteudo = conteudo + `<${tag}>${texto}</${tag}>`
}

contexto.innerHTML = conteudo;



