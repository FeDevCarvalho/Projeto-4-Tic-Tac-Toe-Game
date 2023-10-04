let jogador = 1;
let jogadasDoJogadorX = [];
let jogadasDoJogadorO = [];
let vitoria1 = [0, 1, 2];
let vitoria2 = [3, 4, 5];
let vitoria3 = [6, 7, 8];
let vitoria4 = [0, 3, 6];
let vitoria5 = [1, 4, 7];
let vitoria6 = [2, 5, 8];
let vitoria7 = [0, 4, 8];
let vitoria8 = [6, 4, 2];

function gerandoJogo() {
    let itemDeTroca = document.getElementById('CarregandoOJogo');
    let table = document.createElement('table');
    table.id = 'tabelaDeJogos';
    for (let index = 0; index < 3; index += 1) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        for (let indez = 0; indez < 3; indez += 1) {
            let td = document.createElement('td');
            td.style.width = '100px';
            td.style.height = '100px';
            td.style.border = 'solid black 5px'
            td.className = 'tdzinhos';
            td.onclick = jogo;
            tr.appendChild(td);
        }
    }
    itemDeTroca.replaceWith(table);
};
gerandoJogo();

function jogo(event) {
    let tabela = document.querySelectorAll('.tdzinhos');
    let posicaoDoClick = 0;

    if (jogador === 1) {
        event.target.style.backgroundImage = 'url("1.png")';
        posicaoDoClick = Array.from(tabela).indexOf(event.target);
        jogadasDoJogadorX.push(posicaoDoClick);
    } else {
        event.target.style.backgroundImage = 'url("2.png")';
        posicaoDoClick = Array.from(tabela).indexOf(event.target);
        jogadasDoJogadorO.push(posicaoDoClick);
    }

    jogador = jogador === 1 ? 2 : 1;


    verificaVitoriaDoX();
    verificaVitoriaDoO();
};

function verificaVitoriaDoX() {
    if (vitoria1.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria2.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria2.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria3.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria4.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria5.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria6.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria7.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    } else if (vitoria8.every(vitoria => jogadasDoJogadorX.includes(vitoria))) {
        console.log('Jogador X venceu !');
    }
};

function verificaVitoriaDoO() {
    if (vitoria1.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !');
    } else if (vitoria2.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria2.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria3.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria4.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria5.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria6.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria7.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !')
    } else if (vitoria8.every(vitoria => jogadasDoJogadorO.includes(vitoria))) {
        console.log('Jogador 0 venceu !');
    }
};