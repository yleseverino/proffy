import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET, POST, PUT, DELETE


// CORPO, ROUTE PARAMS, QUERY PARAMS



// localhost:3333/users

app.listen(3333);
