const express = require ('express');
const mongoose = require('mongoose');
const config = require('./config/keys');

const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app  = express();


app.use(bodyParser.json());

const db = config.mongoUri;

mongoose.connect(db)
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.log(err));


app.use('/api/items', items);    
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
