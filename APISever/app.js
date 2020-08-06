const express = require('express');
const app = express();
require('dotenv/config');
const port = 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mongoose = require('mongoose');

const usersRoute = require('./routes/user.route');
const shoesRoute = require('./routes/shoes.route');

app.get('/', (req, res) => {
    res.send('We are on home')
})

app.use('/users', usersRoute);
app.use('/shoes', shoesRoute);

mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true},(err) => {
    if(err) {
        console.log('Can not connect to mongodb, because', err);
    } else{
        console.log('Connect to mongodb successful');
    }
    })

app.listen(port, () => {
    console.log('server listening on port', port);
})