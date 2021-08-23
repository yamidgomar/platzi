const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const url_api = 'https://rickandmortyapi.com/api/character/'

/*const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', url, true)
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)?
                    resolve(JSON.parse(xhttp.responseText))
                    :reject('no se logro la conexion')
            }
        })
        xhttp.send()
    })
}


fetchData(url_api)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${url_api}${data.results[0].id}`)
    })

    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.log(error))

fetchData(url_api)
    .then(data => {
        for(let i = 0; i < data.results.length; i++){

            console.log(data.results[i].name)
        }
    })
*/


/*const xhttp = new XMLHttpRequest()
xhttp.open('GET', url_api, true)
xhttp.onreadystatechange = ( () => {
    if(xhttp.readyState  === 4){
        if(xhttp.status === 200){
            console.log(JSON.parse(xhttp.responseText))            
        }
    }
})

xhttp.send()
console.log(xhttp)
*/

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                ?resolve(JSON.parse(xhttp.responseText))
                :reject(new Error('Error', url))
            }
        })
        xhttp.send()
    })
}

fetchData(url_api)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${url_api}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.log(error))
