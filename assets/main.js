function criaCartao(tema,pergunta,resposta){
    const container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="cartao-conteudo">
     <h3> ${tema}</h3>
    <div class="cartao-conteudo-pergunta">
        ${pergunta}
    </div>
    <div class="cartao-conteudo-resposta">
    ${resposta}
    </div>
    </div>
    `
    container.appendChild(cartao)
    
}
criaCartao('Historia','Em que ano iniciou  a guerra do Vietnã?','Em 1955')
criaCartao('Portugues', 'O que é paraxitona?','Uma paroxitona e uma palavra cuja silaba tonica é a penultima.')