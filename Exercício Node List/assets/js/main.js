
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundoBody = estilosBody.backgroundColor;
console.log(backGroundoBody);

for (let p of ps) {
    p.style.backgroundColor = backGroundoBody;
    p.style.color = "white";
}