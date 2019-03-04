'use strict';

import app from './app';
import { port } from './config';
import logger from './logger';

// Start the server
const server = app.listen(port, () => {
  logger.log('info', `api running on port ${port}`);
});

export default server;
