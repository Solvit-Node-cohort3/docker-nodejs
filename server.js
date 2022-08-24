const express = require('express')

const app = express()


app.get('/', (request, response) => {
    response.send('hello world')
})

app.listen(3000, () => {
    console.log(' express server started on port 3000')
})