const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      morgan     = require('morgan'),
      port       = process.env.PORT || 8081

require('./src/config/connection')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./src/routes/index')(app)

app.listen(port, () =>{
    console.log('Server running on localhost:' + port)
})