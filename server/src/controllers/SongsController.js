const Song = require('../models/Song')

module.exports = {
    async index(req,res) {
        try{
            const search = req.query.search
            if(search){
                console.log(`${search}`)
                await Song.find({$or: [{title:  {$regex: `${search}`}},
                                       {artist: {$regex: `${search}`}},
                                       {album:  {$regex: `${search}`}},
                                       {genre:  {$regex: `${search}`}}]}, (err,songs) => {
                    res.send(songs)
                })
            }else{
                await Song.find((err,songs) => {
                    if(songs.length == 0){
                        return res.send({message: 'No users found!'})
                    }
                    res.send(songs)
                }).limit(10)
            }
        }catch(error){
            console.log(error)
            res.status(500).send({error: 'An error has occured trying to fetch the songs'})
        }
    },

    async post(req,res) {
        try{
            await Song.create(req.body, (err,song) => {
                res.send(song)
            })

        }catch(error){
            res.status(500).send({error: 'An error has occured trying to create the song'})
        }
    },

    async show(req,res) {
        try{
            await Song.findById(req.params.songId, (err,song) => {
                res.status(200).send(song)
            }).limit(10)
        }catch(err){
            res.status(500).send({err: 'An error has occured trying to fetch the song'})
        }
    },

    async put(req,res) {
        try{
            await Song.update({_id: req.params.songId}, req.body, (err,song) => {
                res.status(200).send(song)
            })
        }catch(err){
            res.status(500).send({err: 'An error has occured trying to update the song'})
        }
    }
}