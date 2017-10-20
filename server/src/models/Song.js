const mongoose = require('mongoose'),

Schema = mongoose.Schema,

songSchema = new Schema({
  title     : String,
  artist    : String,
  genre     : String,
  album     : String,
  albumImage: String,
  youtubeId : String,
  lyrics    : String,
  tab       : String
})

module.exports = mongoose.model('Song', songSchema)
