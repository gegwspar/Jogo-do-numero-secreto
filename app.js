let listaNumeros = [];
let numeroLimite = 10;
let numeroSec = aleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 50: ';
function mensagemInicial(){
    exibirTexto('h1','Número secreto');
    exibirTexto('p','Escolha um número entre 1 e 10: ');
}
 mensagemInicial();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}


    function verificarChute() {
        let chute = document.querySelector('input').value;
        if (chute == numeroSec){
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let  msgtentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            document.getElementById('reiniciar').removeAttribute('disabled');
            exibirTexto('h1','Acertou!');
            exibirTexto('p', msgtentativas);
        } else if (chute > numeroSec) {
             exibirTexto('h1','Tente novamente!');
             exibirTexto('p', 'O número secreto é menor!');
        } else {
             exibirTexto('h1','Tente novamente!');
             exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }

    function aleatorio(){
        let numeroEscolhido = parseInt(numeroLimite * 10 +1);
        let quantidadeElementos = listaNumeros.length;

        if (quantidadeElementos == numeroLimite){

        }
        if (listaNumeros.includes(numeroEscolhido)) {
            return aleatorio();
        } else {
            listaNumeros.push(numeroEscolhido);
            return numeroEscolhido;
        }
    }

    function limparCampo (){
        chute = document.querySelector('input').value;
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSec = aleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }