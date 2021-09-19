const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = 'https://swapi.dev/api/people/'

const fetchData = (api_url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.open('GET', api_url, true)
        xhttp.send()
        xhttp.onreadystatechange = function(){
            if(this.readyState === 4){
                (this.status === 200)
                ?resolve(JSON.parse(this.responseText))
                :reject(new Error('Error ' + api_url))
            }
            
        }
    })
}

fetchData(url)
    .then(data => {
        console.log(data.count)
        return fetchData(`${url}${1}`)
    })
    .then(data => {
        console.log(data.name)
        
    })
