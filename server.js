const express = require ('express');
const mongoose = require('mongoose');
const config = require('./config/keys');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app  = express();


app.use(bodyParser.json());

const db = config.mongoUri;

mongoose.connect(db)
    .then(() => console.log('MongoDB connected '))
    .catch(err => console.log(err));


app.use('/api/items', items);    

//Serve static assets if in production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
