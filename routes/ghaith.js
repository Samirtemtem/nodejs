
var express = require('express');
var router = express.Router();
var contact = require('../models/contact');


router.get('/form', async function(req, res, next) {
    const contacts = await contact.find();
    res.render('form.twig', { title: 'Express', cont: contacts });
});

router.get('/:nom', function(req, res, next) {
    res.end("hello " + req.params.nom);

});



module.exports = router;