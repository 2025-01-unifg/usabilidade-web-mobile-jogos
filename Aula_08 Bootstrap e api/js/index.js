function ver_post(post_id){
  // Usar o axios e fazer a requisição para buscar apenas 1 post
  // https://jsonplaceholder.typicode.com/posts/50
  // Exibir no console o post 
  console.log('Ver post', post_id)
}

function render_table(posts){
  const tabela_posts = document.getElementById('tabela_posts')
  posts.forEach(post => {
    const tr = document.createElement('tr')
    const td_id = document.createElement('td')
    const td_title = document.createElement('td')
    const btn_post = document.createElement('td')
    const btn_comment = document.createElement('td')

    td_id.innerText = post.id
    td_title.innerText = post.title
    btn_post.innerHTML = `<button class="btn btn-primary" onclick="ver_post(${post.id})">Ver post ${post.id}</button>`
    btn_comment.innerHTML = `<button class="btn btn-success">Comentários do post ${post.id}</button>`

    tr.appendChild(td_id)
    tr.appendChild(td_title)
    tr.appendChild(btn_post)
    tr.appendChild(btn_comment)

    tabela_posts.appendChild(tr)
  });
}

function get_all_posts(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response)
    render_table(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })
  .finally(function () {
    console.log('Terminou')
  });
}

get_all_posts()