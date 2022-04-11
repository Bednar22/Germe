const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    categoryName: String,
    iconName: String,
});

module.exports = mongoose.model('Category', CategorySchema);
