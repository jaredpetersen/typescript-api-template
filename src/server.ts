'use strict';

import app from './app';
import logger from './logger';
import { port } from './config';

// Start the server
const server = app.listen(port, () => {
  logger.log('info', `api running on port ${port}`);
});

export default server
