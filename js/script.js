const gabigol = document.querySelector('.gabigol')
const mesa = document.querySelector('.mesa')
const p$ = document.getElementById("contador");

let contador = 0;
p$.innerHTML = contador
const lop = setInterval(() => {
    contador++;
    p$.innerHTML = contador
},1500);

const jump = () => {
    gabigol.classList.add('jump');
    setTimeout(() => {
        gabigol.classList.remove('jump');
    }, 800)
}
const loop = setInterval(() => {
    const mesaPos = mesa.offsetLeft;
    const gabiAlt = +window.getComputedStyle(gabigol).bottom.replace('px', '')

    if (mesaPos < 130 && mesaPos > 0 && gabiAlt < 80) {
        mesa.style.animation= 'none'; 
        mesa.style.left = `${mesaPos}px`;
        gabigol.style.animation= 'none'; 
        gabigol.style.bottom = `${gabiAlt}px`;
        gabigol.src = "./img/gg-ll.png";   
        alert(contador);
    } 
}, 10);

document.addEventListener('keydown', jump);