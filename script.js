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

        let random = Math.floor(Math.random() * 5);
        document.getElementById('quotes').innerText =
               `${randomUser[(random)].Advice}`
        
               document.getElementById('id').innerText =
               `${randomUser[(random)].ID}`



    }
}