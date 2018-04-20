import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { store } from './store';

const app = express();

app.use(express.static('src/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.post('/createUser', (req: Request, res: Response) => {
    store
        .createUser({
            username: req.body.username,
            password: req.body.password
        })
        .then(() => res.sendStatus(200));
})

app.post('/login', (req:Request, res: Response) => {
    store
        .authenticate({
            username: req.body.username,
            password: req.body.password
        })
        .then(({ success }) => {
            if(success) res.sendStatus(200);
            else res.sendStatus(401);
        })
})

app.listen(7555, () =>{
    console.log('Server running on http://localhost:7555/');
})