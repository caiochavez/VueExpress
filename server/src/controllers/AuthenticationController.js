const User   = require('../models/User'),
      jwt    = require('jsonwebtoken'),
      config = require('../config/config')

function jwtSignUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: ONE_WEEK}) 
}      

module.exports = {
    async register (req,res) {
        try{
            const UserObj = new User()
            UserObj.name = req.body.name
            UserObj.email = req.body.email
            UserObj.password = UserObj.generateHash(req.body.password) 
            await UserObj.save(function(err,user){
                res.status(200).send({user: user.toJSON(), token: jwtSignUser(user.toJSON())})
            })
        }catch(err){
            console.log('Erro: ' + err)
            res.status(400).send({error: 'This email account is already in use.'})
        }      
    },
    async login (req,res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({email: email})
            if(!user){
                return res.send(403).send({error: 'The login information was incorrect'})
            }

            const UserObj = new User()
            const isPasswordValid = await UserObj.comparePassword(password, user.password)
            if(!isPasswordValid){
                return res.status(403).send({error: 'The login information was incorrect'})
            }

            res.status(200).send({
                user: user.toJSON(),
                token: jwtSignUser(user.toJSON())
            })
        }catch(err){
            res.status(500).send({error: 'An error has occured trying to log in'})
        }
    }
}