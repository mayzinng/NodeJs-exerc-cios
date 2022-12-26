const express = require('express')

const app = express()

app.listen('3000')

//dessa forma criamos um server
//criando uma porta para ser ouvida para o navegador

// app.route('/').get( (req, res) => res.send('hello world') )
// app.route('/name').get( (req, res) => res.send('benja') )


//middleware - ponte entre as requisições

app.use(express.json())

//------------------------

// app.route('/').post( (req, res) =>  res.send(req.body) )

// let author = 'Benjamin'

// app.route('/').get( (req,res) => res.send(author) )

// app.route('/').put( (req,res)  => {
//     author = req.body.author
//     res.send(author)
// } )

//put = editar



// as 3 formas de requisição api

// app.route('/').get( (req, res) => res.send('hello world') )
// app.route('/').post( (req, res) =>  res.send(req.body) )

// let author = 'Benjamin'

// app.route('/').get( (req,res) => res.send(author) )

// app.route('/').put( (req,res)  => {
//     author = req.body.author
//     res.send(author)
// } )


//body params



app.route('/').post((req,res) => {
    const {nome, Cidade} = req.body
    res.send(`meu nome é ${nome}`)
})