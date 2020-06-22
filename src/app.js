const path = require('path')
const express = require('express')
const hbs = require('hbs')
var total = require('./utils/getdata')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app =  express()
const port = process.env.PORT || 3000
 
//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engins and views location
app.set('view engine', 'hbs')
app.set('views', viewPath) 
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Corona count by country',
        name: 'Sanket'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About Page',
        name : 'Sanket Shinde'
    })
})

app.get('/help', (req, res) => {
    res.render('help',  {
        title: 'Help Page',
        data: 'This is help page of website',
        name: 'Sanket Shinde'
    })
})

// app.get('', (req, res) => {
//     res.send('<h1>Hello express</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Sanket',
//         age: 28
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About page</h1>')
// })

app.get('/corona', (req, res) => {

    if(!req.query.country){
        return res.send({
            error:'Please provide country name'
        })
    }
 
    // res.send({
    //     country: req.query.country,
    //     count: 257451
    // })
    total(req.query.country, (error, data) =>{
        if (error){
          return  res.send({ error })
        }
        res.send({
            country: req.query.country,
            count: data['Total_cases'],
            new_cases: data['new_cases'],
            total_deaths: data['total_deaths'],
            new_deaths: data['new_deaths'],
            total_recovered: data['total_recovered'],
            serious_critical: data['serious_critical'],
            total_cases_per1m: data['total_cases_per1m'],
            deaths_per1m: data['deaths_per1m'],
            total_tests: data['total_tests'],
            total_tests_per1m: data['total_tests_per1m'],
            record_date_pure: data['record_date_pure']
        })
      })

    
})

app.get('/product', (req, res) => {

    if(!req.query.country){
        return res.send({
            error: 'Please provide country name'
        })
    }

    console.log(req.query.country)
    res.send({
        country: ''
    })
})


app.get('/help/*', (req,res) => {
    res.render('404',{
        title: '404',
        message : 'Help article not found',
        name: 'Sanket Shinde'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        message : 'My 404 Page',
        name: 'Sanket Shinde'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})