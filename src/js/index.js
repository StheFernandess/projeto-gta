/*
Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas

    Passo 1 - pegar o botão de plataforma no JS pra poder verificar quando o usuário clicar nele

    Passo 2 - pegar o elemento do contéudo que precisa ser mostrado 

    Passo 3 - pegar o click do usuário no JS

    Passo 4 quando o usuário clicar, adcionar a classe ativo na listagem de plataformas dentro do botão para q o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente 


*/

//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas

// Passo 1 - pegar o botão de plataforma no JS pra poder verificar quando o usuário clicar nele
const botao = document.querySelector('.btn-plataforma');

//Passo 2 - pegar o elemento do contéudo que precisa ser mostrado 
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

//Passo 3 - pegar o click do usuário no JS
botao.addEventListener('click', () => {
    
    //Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido   

    //Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente e quando o usuário clicar, adcionar a classe ativo na listagem de plataformas dentro do botão para q o conteúdo apareça 
    elementoPlataformas.classList.toggle('ativo')

});   