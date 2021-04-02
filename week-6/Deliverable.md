# Connecting your backend to a database

This week, you will make the backend create, delete, and read your sources from a MongoDB database.

### You need to:

run `npm i mongoose dotenv` in the terminal

Create a `models/` folder with two files:

`index.js`:
```javascript
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
```

`SourceModel.js`:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE

const sources = mongoose.model('spec_sources', YOUR_SCHEMA);

module.exports = sources;
```

Create a file  `config.js`:
```javascript
require('dotenv').config();

const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays = 14;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.tp9ny.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    URI: URI,
    discardAfterXDays: discardAfterXDays
};
```

Add the line `const db = require('./models')` to the `server.js` file.

Create a `.env` file and add the credentials I sent in the chat to it.

Edit the controller file to make the functions perform the operations with the database.

You should be able to log into MongoDB Atlas to verify that everything is working correctly.


By the end of this deliverable, you will have an entire backend that is connected to a database!
