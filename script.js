let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - Verde
1 - Vermelho
2 - Amarelo
3 - Azul
*/

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            element.classList.remove('selected');
        }, 300);
    }, number - 250);
}

//Checa se os botões clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//recebe o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

//Retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    }else if(color == 3) {
        return blue;
    }
}

//Proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () =>{
    alert('Bem indo ao Gênesis!\nIniciando novo jogo!');
    score = 0;

    nextLevel();
}

//Eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Inicia jogo
playGame();