import express from 'express';

import authentication from './authentication';
import users from './users';
import clients from './clients';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    clients(router);

    return router;
};