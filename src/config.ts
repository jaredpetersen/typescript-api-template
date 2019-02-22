'use strict';

// Gather configuration from the environment or use the preset defaults

export const port = process.env.PORT || '8080';
export const logLevel = process.env.LOG_LEVEL || 'debug';
export const silent = process.env.NODE_ENV == 'test';
