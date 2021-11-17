const express = require('express');
const app = express();
const port = 3001;

//Routes
//const userRoute = require('./routes/user');
//app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../client/build')));
// // Anything that doesn't match the above, send back index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '../client/build/index.html'));
// });
