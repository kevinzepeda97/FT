const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//users API routes
app.use('/api/users', require('./controllers/users'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on http://localhost:${port}`));

