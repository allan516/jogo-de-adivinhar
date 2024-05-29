let aleatorio = Math.floor(Math.random() * 100 + 1);
let palpite = document.getElementById('palpite');
const button = document.getElementById('button');
const restart = document.getElementById('restart');
const resposta = document.querySelector('.resposta');
const acertou = document.querySelector('.acertou');
const errou = document.querySelector('.errou');
const contador = [];

console.log(aleatorio, palpite.value);
const evento = button.addEventListener('click', function () {
    let valorPalpite = parseInt(palpite.value);
    if (valorPalpite > 100 || valorPalpite < 1) {
        palpite.focus();
        palpite.value = '';
        return alert(`Digite um número entre 1 e 100`);
    }
    if(aleatorio === valorPalpite) {
        acertouMiseravy();
        palpite.focus();
        palpite.value = '';
        
        button.style.display = 'none';
        restart.style.display = 'block';
    }
    if (aleatorio > valorPalpite) {
        contador.length === 9 ? gameOver() : contador.push(valorPalpite);
        palpite.focus();
        palpite.value = '';

        resposta.textContent = `Tente um número mais alto. Números jogados: ${contador}`;
        resposta.style.display = 'block';
    }
    
    if (aleatorio < valorPalpite) {
        contador.length === 9 ? gameOver() : contador.push(valorPalpite);
        palpite.focus();
        palpite.value = '';

        resposta.textContent = `Tente um número mais baixo. Números jogados: ${contador}`;
        resposta.style.display = 'block';
    }
});

function acertouMiseravy() {
    palpite.focus();
    palpite.value = '';
    acertou.style.display = 'block';
    acertou.textContent = `Acertouu!`;
}


function gameOver() {
    palpite.focus();
    palpite.value = '';
    button.style.display = 'none';
    restart.style.display = 'block';
    errou.textContent = `Errooouu!`;
    errou.style.display = 'block';
}

const jogarNovamente = restart.addEventListener('click', function () {
    if (acertou || errou || resposta) {
        aleatorio = Math.floor(Math.random() * 100 + 1);
        document.querySelectorAll('.acertou, .errou, .resposta').forEach(element => {
            palpite.focus();
            palpite.value = '';
            contador.length = 0;
            element.style.display = 'none';
            button.style.display = 'block';
            restart.style.display = 'none';
        });
    }
});

 /* 
- Tentar fazer com que a div de resposta não altere a posição dos outros elementos 
- Achar alguma cor que combine para o fundo
- Tentar cirar um lugar separado para armazenar os números já enviados 
- Implementar um botão de dicas
- Impedir que seja colocado números maiores que 100 e números repetidos
*/