'use strict';

import winston from 'winston';
import { logLevel, silent } from './config';

const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `{"level": "${level}", "timestamp": "${timestamp}", "message": "${message}"}`;
});

export const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    loggerFormat
  ),
  transports: [
    new winston.transports.Console()
  ],
  exitOnError: false,
  silent
});

export default logger;
