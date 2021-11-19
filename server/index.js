const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
    () => console.log('!!! connected to DB !!!')
);

//Routes
const flashcardRoute = require('./routes/flashcard');
app.use('/flashcard', flashcardRoute);

const categoryRoute = require('./routes/category');
app.use('/category', categoryRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../client/build')));
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '../client/build/index.html'));
// });
