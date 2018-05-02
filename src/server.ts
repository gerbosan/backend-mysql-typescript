import bodyParser = require('body-parser');
import morgan = require('morgan');
import express = require('express');
import favicon = require('serve-favicon');
import path = require('path');
import cors = require('cors');
import dotenv = require('dotenv');

import app from './API/app';
// import { store } from './API/controllers/store.ts';
import { controller as ctrl } from './API/controllers/users'
const environ: dotenv.DotenvResult = dotenv.config({ path: './src/variables.env' });
if(environ.error) {
    throw environ.error
}
app.set('port', process.env.PORT);

app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(express.static('src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}))
/* */
app.post('/createUser', ctrl.createUser);
app.post('/login', ctrl.login);
/* */
app.listen(app.get('port'), (err:Error) => {
    if(err) {
        return console.log(err)
    }
    return console.log(`Server running on http://localhost:${app.get('port')}/`);
});