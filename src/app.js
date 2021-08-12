const path = require('path')
const express = require('express')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Peter Fotis'
    })
})

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'About',
        name: 'Peter Fotis'
    })
})

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