var fetchData = require('./pruebautils') 
const url = 'https://rickandmortyapi.com/api/character/'

fetchData(url)
    .then(data => {
        console.log(data.info.count)
        return fetchData(`${url}${data.results[1].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.name)
    })
    .catch(err => console.log(err))

