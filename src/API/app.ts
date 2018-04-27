import express = require('express');
// import { Request, Response } from 'express';

// import { store } from './controllers/store';
// import { controller as ctrl } from './controllers/users';
// import { store } from './controllers/store';

class App {
    public express;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        /*
        // router.post('/createUser', ctrl.createUser);
        router.post('/createUser', (req: Request, res: Response) => {
            store
                .createUser({
                    username: req.body.username,
                    password: req.body.password
                })
                .then(() => res.sendStatus(200));
        });
        this.express.use('/createUser', router);
        // router.post('/login', ctrl.login);
        router.post('/login', (req: Request, res: Response) => {
            store
                .authenticate({
                    username: req.body.username,
                    password: req.body.password
                })
                .then(({ success }) => {
                    if(success) res.sendStatus(200)
                    else res.sendStatus(401)
                })
        });
        this.express.use('/login', router);
        
        */
    //    this.express.use('/', router);
    }
}

export default new App().express