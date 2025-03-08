
function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    if (validarCampos(quantidade, de, ate)) {
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            console.log('Tentando obter número inédito');
        }
        sorteados.push(numero);
        // console.log(sorteados);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo__resultado" id="resultado">${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (min, max) + min);
}

function validarCampos(quantidade, de, ate) {
    // valida se todos os campos foram preenchidos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Obrigatório preencher todos os campos. Verifique!');
        return true;
    }
    // trata para não informar o valor inicial maior que o final
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return true;
    }
    // trata se quantidade de nrs a sortear é maior que a diferença entre o nr mínimo e o máximo
    if (quantidade > ate - de) {
        alert('Campo "Quantidade de números" deve ser inferior à diferença entre o informado nos campos "Do número" e "Até o número". Verifique!');
        return true;
    }
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');

    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo" id="resultado">Nenhum até agora</label>';
    alterarStatusBotao();
}