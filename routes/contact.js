var Contact = require('../models/contact')
var router = require('express').Router();

// Search route - must be before /:id routes to avoid conflict
router.get('/search', async function(req, res) {
    try {
        const { name, phone, id } = req.query;
        let query = {};

        if (name) {
            query.FullName = { $regex: name, $options: 'i' };
        }
        if (phone) {
            query.Phone = { $regex: phone };
        }
        if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
            query._id = id;
        }

        const contacts = await Contact.find(query);
        return res.status(200).json({ success: true, data: contacts });
    } catch (err) {
        console.error('Search error:', err);
        return res.status(500).json({ success: false, error: 'Erreur lors de la recherche' });
    }
});

router.get('/', async function(req, res, next) {
    try {
        const contacts = await Contact.find();
        res.render('form.twig', { 
            title: "Contact list", 
            cont: contacts 
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async function(req, res, next) {
    try {
        const newContact = new Contact({
            FullName: req.body.FullName,
            Phone: req.body.Phone
        });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// New route to get a contact by ID
router.get('/:id', async function(req, res, next) {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(404).json({ message: 'Invalid contact ID' });
        }
        next(err);
    }
});

router.get('/:id/edit', async function(req, res, next) {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.redirect('/');
        }
        res.render('edit.twig', { contact: contact });
    } catch (err) {
        next(err);
    }
});

router.post('/:id/edit', async function(req, res, next) {
    try {
        await Contact.findByIdAndUpdate(req.params.id, {
            FullName: req.body.FullName,
            Phone: req.body.Phone
        });
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

router.post('/:id/delete', async function(req, res, next) {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;