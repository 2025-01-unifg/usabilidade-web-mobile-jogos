function criarTabela() {
  // Obtém valores dos inputs
  let numLinhas = document.getElementById("numLinhas").value;
  let numColunas = document.getElementById("numColunas").value;
  let corBorda = document.getElementById("corBorda").value;

  // Valida se os números são maiores que zero
  if (numLinhas < 1 || numColunas < 1) {
      alert("Por favor, insira valores válidos para linhas e colunas.");
      return;
  }

  // Cria a tabela
  let tabela = document.createElement("table");

  for (let i = 0; i < numLinhas; i++) {
      let linha = document.createElement("tr");

      for (let j = 0; j < numColunas; j++) {
          let coluna = document.createElement("td");
          coluna.style.border = `2px solid ${corBorda}`;
          linha.appendChild(coluna);
      }

      tabela.appendChild(linha);
  }

  // Adiciona a tabela na div container
  let container = document.getElementById("tabelaContainer");
  container.innerHTML = ""; // Limpa antes de adicionar uma nova tabela
  container.appendChild(tabela);
}

function limparTabela() {
  document.getElementById("tabelaContainer").innerHTML = "";
  document.getElementById("numLinhas").value = "";
  document.getElementById("numColunas").value = "";
  document.getElementById("corBorda").value = "#000000";
}