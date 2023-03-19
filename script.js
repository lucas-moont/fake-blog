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
            let postHtml = `<div><h1>${item.title}</h1><p>${item.body}</p></div>`
            postArea.innerHTML += postHtml
        });
    }else{
        postArea.innerHTML = 'Nenhum post encontrado.'
    }
}

async function inserir(){
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value 

    if(title && body){

    }else{
        alert('Um ou mais campos não foram preenchidos.')
    }
}


insertBtn.addEventListener('click', inserir)
readPosts()
