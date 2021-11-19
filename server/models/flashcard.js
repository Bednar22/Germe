const mongoose = require('mongoose');

const FlashcardSchema = mongoose.Schema({
    wordGer: String,
    wordEng: String,
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
