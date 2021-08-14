const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express condig
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static deirectory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Peter Fotis'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Peter Fotis'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: `Once you have a template, use the Handlebars.compile method to 
        compile the template into a function. The generated function takes a context 
        argument, which will be used to render the template.`,
        title: 'Help',
        name: 'Peter Fotis'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        city: 'Melbourne',
        temp: 16,
        name: 'Peter Fotis'
    })
})

app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})