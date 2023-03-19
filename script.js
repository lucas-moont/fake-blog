document.querySelector('#botao').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.forEach(element => {
            console.log(element.title)
        });
    })

    console.log("Here I am.")
})