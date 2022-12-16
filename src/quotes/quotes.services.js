const quotesControllers = require('./quotes.controllers')


const getAllQuotes = (req,res)=>{
    quotesControllers.findAllQuotes()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const getQuoteById = (req,res)=>{
    const id=req.params.id

    quotesControllers.findQuoteById(id)
        .then((data)=>{
            if(data){
                res.status(200).json(data)
            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const postQuote = (req,res) =>{
    const {phrase,author,year}= req.body
    quotesControllers.createQuote({phrase,author,year})
        .then((data)=>{
            res.status(201).json(data)
        })
        .catch((error)=>{
            res.status(400).json({message:error.message})
        })
}

const patchQuote = (req,res) =>{
    const id = req.params.id
    const {phrase,author,year}=req.body

    quotesControllers.updateQuote(id, {phrase,author,year})
        .then((data)=>{
            if(data){
                res.status(200).json({message: 'Quote modified'})

            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

const deleteQuote = (req,res)=>{
    const id = req.params.id
    quotesControllers.deleteQuote(id)
        .then((data)=>{
            if(data===1){
                res.status(204).json({message: 'Quote deleted'})
            }
            else{
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((error)=>{
            res.status(400).json({message: error.message})
        })
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    postQuote,
    patchQuote,
    deleteQuote
}