const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const userController = require('./controllers/Users');
const app = express();

app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//users API route
app.use('/api/users', userController);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on http://localhost:${port}`));

