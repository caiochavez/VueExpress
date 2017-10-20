const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt-nodejs')

    const Schema = mongoose.Schema,
    
    userSchema = new Schema({
        name: {type: String},
        email: {type: String, unique: true},
        password: {type: String}
    })
    
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    }
    
    userSchema.methods.comparePassword = function(passwordBody, passwordDB) {
        return bcrypt.compareSync(passwordBody, passwordDB, null)
    }
    
    module.exports = mongoose.model('User', userSchema)
