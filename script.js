let insertBtn = document.querySelector('#insertBtn')

async function readPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = ''
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    if(json.length > 0){
        postArea.innerHTML = ''
        json.forEach(item => {
            let postHtml = `<div><h2>${item.title}</h2><p>${item.body}</p></div>`
            postArea.innerHTML += postHtml
        });
    }else{
        postArea.innerHTML = 'Nenhum post encontrado.'
    }
}

async function addNewPosts(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    )
    
    let postArea = document.querySelector('.posts')
    let postAreaHTML = postArea.innerHTML

    let newPostCol = `<div><h2>${title}</h2><p>${body}</p></div>`
    postArea.innerHTML = newPostCol + postAreaHTML
    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''
    //readPosts()
    //The function upwards would be used if the fake API really showed new posts. As it is just a fake API for studies purposes, I did a different function to manually add the new post to the grid.
}

function inserir(){
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value 

    if(title && body){
        addNewPosts(title, body)
    }else{
        alert('Um ou mais campos não foram preenchidos.')
    }
}


insertBtn.addEventListener('click', inserir)
readPosts()
