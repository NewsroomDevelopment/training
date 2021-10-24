const mongoose = require('mongoose');
const config = require('../config');
uri = config.URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Failed to connect to mongoDB:', e.message);
    })

const db = mongoose.connection;

module.exports = db;