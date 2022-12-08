function advice() {
    
            fetch ("advice.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            showRandomUserData(data)
        })
    

    showRandomUserData = (randomUser) => {


        let random = Math.floor(Math.random() * 5);
        document.getElementById('quotes').innerText =
               `${randomUser[(random)].Advice}`
        
               document.getElementById('id').innerText =
               `${randomUser[(random)].ID}`



    }
}