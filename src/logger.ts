'use strict';

import winston from 'winston';
import { logLevel, silent } from './config';

const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `{"level": "${level}", "timestamp": "${timestamp}", "message": "${message}"}`;
});

export const logger = winston.createLogger({
  exitOnError: false,
  format: winston.format.combine(winston.format.timestamp(), loggerFormat),
  level: logLevel,
  silent,
  transports: [new winston.transports.Console()]
});

export default logger;
