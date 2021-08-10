const path = require('path')
const express = require('express')


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(path.join(publicDirectoryPath)))


// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Peter',
//         age: 36
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
    res.send([{
        city: 'Melbourne',
        temp: 16
    },{
        city: 'Sydney',
        temp: 12
    }])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})