const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    mainCategory: String,
});

module.exports = mongoose.model('Category', CategorySchema);
