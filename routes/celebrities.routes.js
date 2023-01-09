// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model')

// all your routes here
router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity.hbs')
})

router.post('/celebrities/create', (req, res, next) => {
    
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then(() => {
        console.log("SUCCESS!!!!")
        res.redirect('/celebrities')
    })
    .catch(err => console.log(err, 'this is the error'))
})

router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
    .then(
        function(celebrities){
            res.render('celebrities/celebrities.hbs', {celebrities: celebrities})
        }
    )
    .catch(err => console.log(err))
})

module.exports = router;