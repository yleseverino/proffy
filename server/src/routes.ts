import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesController = new ClassesController();
const connectionsControler = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsControler.create);
routes.get('/connections', connectionsControler.index);

export default routes;