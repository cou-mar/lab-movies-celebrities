// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movies = require('../models/movies.model')
const celebrities = require('../models/Celebrity.model')

// all your routes here
router.get('/movies/create' , (req, res, next) => {
    res.render('new-movies.hbs');
})

router.post("/movies/create", (req, res, next) => {
    Movies.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        Cast: [{
            type: Schema.Types.ObjectId,
            ref: "Celebrity",
        }]
    })
})

module.exports = router;