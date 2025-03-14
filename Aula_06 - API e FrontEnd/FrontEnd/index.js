document.getElementById('buscarClientes').addEventListener('click', function() {

  axios.get('http://127.0.0.1:3000/clientes')
      .then(function (response) {
          const clientes = response.data
          const div = document.getElementById('lista')
          div.innerHTML = ''

          clientes.forEach(cliente => {
              div.innerHTML += `<p>Nome: ${cliente.nome} - Email: ${cliente.email}</p>`
          })
      })
      .catch(function (error) {
          console.error('Erro ao buscar clientes:', error)
          document.getElementById('msg').innerHTML = 'Erro ao buscar clientes: ' + error
      })

})