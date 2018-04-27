import { Request, Response } from 'express';
import { store } from './store'

const controller = {
    createUser: (req: Request, res: Response) => {
        store
            .createUser({
                username: req.body.username,
                password: req.body.password
            })
            .then(() => res.sendStatus(200));
    },

    login: (req: Request, res:Response) => {
        store
            .authenticate({
                username: req.body.username,
                password: req.body.password
            })
            .then(({ success }) => {
                if(success) res.sendStatus(200)
                else res.sendStatus(401)
            })
    }
}

export { controller }