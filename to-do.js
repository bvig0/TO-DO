// Declarando as variáveis
let enviar = document.querySelector("#enviar");
let contador = document.querySelector("#contador");
let ul = document.querySelector("ul");
let numerosTarefas = 0;

// Criando uma função de criar tarefas e atribuindo ao botão de Enviar
enviar.onclick = function enviarTarefa(e) {
    e.preventDefault();
    // Declarando as variáveis
    let input = document.querySelector("input[type='text']");
    let li = document.createElement("li");
    let button = document.createElement("button");
    let text = document.createTextNode(input.value);

    // Se o usuário deixar o input vazio, vai aparecer uma caixa e o input ficará vermelho
    if (!input.value) {
        input.style.border = "1px solid red";
        alert('Digite uma tarefa!!')
        return
    }
    input.style.border = "1px solid #c4c4c4"; // Deixando ele base para n dar problema

    // colocando os itens dentro da 'Estrutura' para formar uma tarefa
    li.setAttribute("class", "item");
    button.setAttribute("class", "fa-solid fa-xmark");
    let spanTexto = document.createElement("span"); // Criando um span que isole o texto para que só o texto seja riscado
    spanTexto.appendChild(text);
    li.appendChild(spanTexto);
    li.appendChild(button);
    ul.appendChild(li);

    input.value = ""; // Deixando o input vazio depois de enviar-lo
    numerosTarefas++;  // Somando o números de tarefas
    contador.textContent = numerosTarefas; // colocando visivel para ver no campus de "tarefa"
    // criando o método/função de riscar
    li.addEventListener('click', (event) => {
        event.preventDefault();
        li.classList.toggle("riscar");
    })

    // Criando o método/função de excluir uma tarefa e ligando ela ao botão 'X'
    button.addEventListener('click', event => {
        ul.removeChild(li);
        numerosTarefas--;
        contador.textContent = numerosTarefas;
    })

    /* Outras opções de ligar o botão enviar com a função:
    1- enviar.onclick = enviarTarefa
    2- onclick="enviarTarefa()" //ESTE SENDO NA TAG DO BOTÃO
    3- enviar.addEventListener('click', enviarTarefa) */
}

// função/método de limpar tarefas, foi ligada diretamente ao botão 'limpar' no HTML
function limparTudo(){
    numerosTarefas=0;
    contador.textContent = numerosTarefas;
    ul.innerHTML="";
}