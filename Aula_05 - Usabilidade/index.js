// Evento para capturar o clique no botão "Salvar"
document.getElementById('salvar').addEventListener('click', function() {
  // Obtém os valores de cada input
  let text = document.getElementById('inputText').value;
  let password = document.getElementById('inputPassword').value;
  let number = document.getElementById('inputNumber').value;
  let checkbox = document.getElementById('inputCheckbox').checked;
  let radio = document.querySelector('input[name="inputRadio"]:checked').value;
  
  // Para o input file, verifica se há algum arquivo selecionado
  let fileInput = document.getElementById('inputFile');
  let file = fileInput.files.length > 0 ? fileInput.files[0].name : 'Nenhum arquivo selecionado';
  
  let email = document.getElementById('inputEmail').value;
  let url = document.getElementById('inputURL').value;
  let date = document.getElementById('inputDate').value;
  let time = document.getElementById('inputTime').value;
  let datetime = document.getElementById('inputDatetime').value;
  let month = document.getElementById('inputMonth').value;
  let week = document.getElementById('inputWeek').value;
  let color = document.getElementById('inputColor').value;
  let range = document.getElementById('inputRange').value;
  let search = document.getElementById('inputSearch').value;
  let tel = document.getElementById('inputTel').value;
  let buttonVal = document.getElementById('inputButton').value;
  let submitVal = document.getElementById('inputSubmit').value;
  let resetVal = document.getElementById('inputReset').value;
  let hidden = document.getElementById('inputHidden').value;
  
  // Monta o HTML para exibir os valores dos inputs
  let output = '<h2>Valores dos Inputs</h2>';
  output += '<ul>';
  output += `<li>Text: ${text}</li>`;
  output += `<li>Password: ${password}</li>`;
  output += `<li>Number: ${number}</li>`;
  output += `<li>Checkbox: ${checkbox}</li>`;
  output += `<li>Radio: ${radio}</li>`;
  output += `<li>File: ${file}</li>`;
  output += `<li>Email: ${email}</li>`;
  output += `<li>URL: ${url}</li>`;
  output += `<li>Date: ${date}</li>`;
  output += `<li>Time: ${time}</li>`;
  output += `<li>Datetime-local: ${datetime}</li>`;
  output += `<li>Month: ${month}</li>`;
  output += `<li>Week: ${week}</li>`;
  output += `<li>Color: ${color}</li>`;
  output += `<li>Range: ${range}</li>`;
  output += `<li>Search: ${search}</li>`;
  output += `<li>Tel: ${tel}</li>`;
  output += `<li>Button: ${buttonVal}</li>`;
  output += `<li>Submit: ${submitVal}</li>`;
  output += `<li>Reset: ${resetVal}</li>`;
  output += `<li>Hidden: ${hidden}</li>`;
  output += '</ul>';
  
  // Insere o HTML na div de resultado
  document.getElementById('resultado').innerHTML = output;
});
