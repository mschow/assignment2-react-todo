'use strict';

import express from 'express';
import config from 'config';
import api from './routes';


const app = express();
const PORT = config.port;

app.use('/api', api);

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));
