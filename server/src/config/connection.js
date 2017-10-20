const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/VueExpress', (err) => {
    if(err) throw err
    console.log('Connection successfully completed with MongoDB')
})