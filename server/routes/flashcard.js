const express = require('express');
const router = express.Router();
const Flashcard = require('../models/flashcard');

// /flashcard/...

router.get('/', async (req, res) => {
    await Flashcard.find()
        .then((flashcards) => res.json(flashcards))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
