const Quotes = require('../models/quotes.models')

//Estructura de las citas
/* 
    {
        id: 1,
        phrase: 'La cita texto texto texto',
        author: 'Benjamin Florez',
        year: 2022
    }
*/



//Obtener todos los quotes
const findAllQuotes = async()=>{
    const data = await Quotes.findAll()
    return data
}

//Obtener quote por id

const findQuoteById = async(id)=>{
    const data = await Quotes.findOne({
        where:{
            id: id
        }
    })

    return data
}

//Crear una quote

const createQuote = async(data) =>{
    const newQuote = await Quotes.create({
        phrase: data.phrase,
        author: data.author,
        year: data.year
    })

    return newQuote
}

//Actualizar una quote

const updateQuote = async(id,obj)=>{
    const data = await Quotes.update(obj,{
        where:{
            id:id
        }
    })

    return data[0]
}


//Borrar una quote

const deleteQuote = async(id) =>{
    const data = await Quotes.destroy({
        where: {
            id:id
        }
    })

    return data
}

module.exports={
    findAllQuotes,
    findQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
}