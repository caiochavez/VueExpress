const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      port       = process.env.PORT || 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req,res) =>{
    res.send({message: `Oi ${req.body.name}, Voçê foi registrado! Sua senha é ${req.body.password}`})
})

app.listen(port, () =>{
    console.log('Servidor rodando em localhost:' + port)
})