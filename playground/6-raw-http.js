const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=03eebcffa686b5f15bed8395b034dfb0&query=45,-75&units=m'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', () => {
    console.log('An error', error)
})

request.end()