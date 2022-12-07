function advice() {
    window.onclick = () => {
        randomUserGenerator()
    }

    const randomUserGenerator = () => {
            fetch ("advice.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            showRandomUserData(data)
        })
    }

    showRandomUserData = (randomUser) => {

        // console.log(randomUser[0].Advice)
        // console.log(randomUser[0].ID)

        document.getElementById('id').innerText =
        `${randomUser[Math.floor(Math.random() * 5)].ID} `
    
        document.getElementById('quotes').innerText =
        `"${randomUser[Math.floor(Math.random() * 5)].Advice}" `

    }
}