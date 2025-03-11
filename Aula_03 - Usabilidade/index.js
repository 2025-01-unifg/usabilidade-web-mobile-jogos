
// Função que cria elementos na página
function criar_elementos() {
  // Captura os valores dos campos de entrada
  const nome = document.getElementById('nome').value;
  const numero = parseInt(document.getElementById('numero').value, 10);
  const resultado = document.getElementById('resultado');

  // Verifica se os valores não estão vazios e se o número é válido
  if (nome && !isNaN(numero)) {
    // Cria uma nova div para exibir o nome e o número
    const div = document.createElement('div');
    div.textContent = `${nome}: ${numero}`;

    // Define a cor da div baseado no valor do número
    div.className = numero > 100 ? 'vermelho' : 'verde';

    // Adiciona a nova div ao resultado
    resultado.appendChild(div);

    // Limpa os campos após a adição
    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
  }
}

function colocar_cor(){
  document.getElementById("adicionar").classList.add("movendo");
}

function tirar_cor(){
  document.getElementById("adicionar").classList.remove("movendo");
}

function colocar_cor_titulo(){
  document.getElementById("titulo").classList.add("teste");
}

function tirar_cor_titulo(){
  document.getElementById("titulo").classList.remove("teste");
}

// Adiciona um evento de clique ao botão de adicionar
document.getElementById('adicionar').addEventListener('click', criar_elementos);

// Adiciona um evento de mouseover e mouseout ao campo de número
document.getElementById("numero").addEventListener("mouseover", colocar_cor);
document.getElementById("numero").addEventListener('mouseout', tirar_cor);

document.getElementById("nome").addEventListener("mouseover", colocar_cor_titulo);
document.getElementById("nome").addEventListener('mouseout', tirar_cor_titulo);