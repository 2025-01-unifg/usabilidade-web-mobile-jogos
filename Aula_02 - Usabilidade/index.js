
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

// Captura o botão e adiciona a função 'criar_elementos' ao evento de clique do botão
document.getElementById('adicionar').addEventListener('click', criar_elementos);