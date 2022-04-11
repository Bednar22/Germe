const express = require('express');
const router = express.Router();

const Category = require('../models/category');

//category/...

router.get('/', async (req, res) => {
    await Category.find()
        .then((categories) => res.json(categories))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', async (req, res) => {
    console.log('jestem');
    console.log(req.body.iconName);
    const category = new Category({
        categoryName: req.body.categoryName,
        iconName: req.body.iconName,
    });

    await category.save();
});

module.exports = router;
