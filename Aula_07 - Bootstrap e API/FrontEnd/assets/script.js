function div_client(cliente, sexo){
  return `
  <div class="feature col">
    <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <i class="${sexo}" style="font-size: 2rem; color: blank;"></i>
    </div>
    <h3 class="fs-2 text-body-emphasis">${cliente.nome}</h3>
    <p>${cliente.email}</p>
    <a href="detalhes.html?id_cliente=${cliente.id}" class="icon-link">
      Detalhes
      <svg class="bi"><use xlink:href="#chevron-right"/></svg>
    </a>
  </div>
  `
}

function get_clients(){
  axios.get('http://127.0.0.1:3000/clientes')
  .then(function (response) {
    const clientes = response.data
    console.log('Clientes:', clientes)
    const div = document.getElementById('lista')
    div.innerHTML = ''

    clientes.forEach(cliente => {
      const sexo = cliente.sexo === 'M' ? 'bi bi-person-standing' : 'bi bi-person-standing-dress'
      div.innerHTML += div_client(cliente, sexo)
    })
  })
  .catch(function (error) {
    console.error('Erro ao buscar clientes:', error)
    document.getElementById('lista').innerHTML = 'Erro ao buscar clientes: ' + error
  })
}

get_clients()