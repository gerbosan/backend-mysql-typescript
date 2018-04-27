import bodyParser = require('body-parser');
import morgan = require('morgan');
import express = require('express');

import app from './API/app';
// import { store } from './API/controllers/store.ts';
import { controller as ctrl } from './API/controllers/users'

app.use(express.static('src/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));
/* */
app.post('/createUser', ctrl.createUser);
app.post('/login', ctrl.login);
/* */
app.listen(7555, (err:Error) => {
    if(err) {
        return console.log(err)
    }
    return console.log('Server running on http://localhost:7555/');
});