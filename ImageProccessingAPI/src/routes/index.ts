import express from 'express';
import imageFactory from './api/imageFactory';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Mani route api');
});

routes.use('/imageFactory', imageFactory);

export default routes;
