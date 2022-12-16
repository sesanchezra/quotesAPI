const router = require('express').Router()

const quotesServices = require('./quotes.services')


router.get('/quotes', quotesServices.getAllQuotes)
router.post('/quotes',quotesServices.postQuote)
router.patch('/quotes/:id', quotesServices.patchQuote)
router.get('/quotes/:id',quotesServices.getQuoteById)
router.delete('/quotes/:id', quotesServices.deleteQuote)

module.exports= router