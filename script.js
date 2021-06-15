init = () => {
    for (let i = 0; i <= 3; i++) {
        let numeros = generateRandonNumber ();
        let aleatorio = '#img' + i;
        let id = '#name' + i; 
        quantidade (numeros, aleatorio,id)
    }
}

generateRandonNumber = () => {
    return Math.floor(Math.random () * 671);
}


quantidade = (generateRandonNumber, image, id) => {
    
    return fetch ('https://rickandmortyapi.com/api/character/' + generateRandonNumber, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }) .then((response) => response.json()).then((data) => {
        document.querySelector(image).src = data.image;
        document.querySelector(id).innerHTML = data.name;
    })
    .catch((e) => {
        console.log(e);
    })
}