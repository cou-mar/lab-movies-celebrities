const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const moviesSchema = new Schema ({
    title: String,
    genre: String,
    plot: String,
    Cast: [{type: Schema.Types.ObjectId,
        ref: "Celebrity",
      }]
})

const Movies = mongoose.model('Movies', moviesSchema);

module.exports= Movies;