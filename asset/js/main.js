/* MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
 BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
 BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Consigli del giorno:
Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?" */



/* MILESTONE 2
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
 */
// inseriamo tutte le immagini dinamicamente servendoci dell'array fornito
const containerImgEl = document.getElementById('carol');
const prewImg = document.getElementById('top_button');
const nextImg = document.getElementById('bottom_button');
const allImg = document.getElementById('all_img')
const carousel = [
    '"./asset/img/01.webp"',
    '"./asset/img/02.webp"',
    '"./asset/img/03.webp"',
    '"./asset/img/04.webp"',
    '"./asset/img/05.webp"'
];
let imgvisible = 0;
//ciclo for che concatena un template literal
for (let i = 0; i < carousel.length; i++) {
    const opTernario = (i == imgvisible ? 'primary' : '')

    const imgSrc = carousel[i];
    const imgEl = `<img class="${i == imgvisible ? 'visibl primary' : ''}" src=${imgSrc}>`;
    const allImgEl = `<img class="visibl ${opTernario}" src=${imgSrc}>`
    containerImgEl.insertAdjacentHTML('beforeend', imgEl);
    allImg.insertAdjacentHTML('beforeend', allImgEl);
    console.log(allImgEl)
    console.log(imgEl);
};
const imgLoad = document.querySelectorAll('.imgcontainer img');
const allImgLoad = document.querySelectorAll('.carousel .container img');

console.log(imgLoad);
console.log(allImgLoad);

function selectImg(imgCurrentVisible,allImgCurrentVisible) {
    
    allImgCurrentVisible.classList.remove('primary');
    imgCurrentVisible.classList.remove('visibl');
    const nextAllImgEl = allImgLoad[imgvisible];
    const nextImgEl = imgLoad[imgvisible];
    nextAllImgEl.classList.add('primary');
    nextImgEl.classList.add('visibl');
}
nextImg.addEventListener('click', function () {
    const imgCurrentVisible = imgLoad[imgvisible]
    const allImgCurrentVisible = allImgLoad[imgvisible]
    if (imgvisible < (imgLoad.length - 1)) {
        imgvisible++;
        selectImg(imgCurrentVisible,allImgCurrentVisible);
        console.log(allImgLoad);
    } else if (imgvisible == (imgLoad.length - 1)) {
        imgvisible = 0;
        selectImg(imgCurrentVisible,allImgCurrentVisible);
        console.log(allImgLoad);
    };
});

prewImg.addEventListener('click', function () {
    const imgCurrentVisible = imgLoad[imgvisible]
    const allImgCurrentVisible = allImgLoad[imgvisible]
    if (imgvisible > 0) {
        imgvisible--;
        selectImg(imgCurrentVisible,allImgCurrentVisible);
    } else if (imgvisible == 0) {
        imgvisible = (imgLoad.length - 1);
        selectImg(imgCurrentVisible,allImgCurrentVisible);
    };
});
