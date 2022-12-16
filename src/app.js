const express = require('express')
const quotesRouter = require('./quotes/quotes.router')
const app = express()
const port = 9005
const db = require('./utils/database')

app.use(express.json())

db.authenticate()
    .then(()=> console.log('Database auntenticada correctamente'))
    .catch((error)=> console.log(error))

db.sync()
    .then(()=> console.log('Database sincronizada correctamente'))
    .catch((error)=> console.log(error))

    app.use('/',quotesRouter)

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})