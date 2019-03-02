'use strict';

import { Router } from 'express';
import * as middleware from './middleware';
import * as errors from './errors';
import healthRouter from './health/router';
import taskRouter from './tasks/router';

// Set up the router
const router = Router();

// Wire up middleware
router.use(middleware.doSomethingInteresting);

// Wire up routers
router.use('/health', healthRouter);
router.use('/tasks', taskRouter);

// Wire up error-handling middleware
router.use(errors.errorMiddleware);
router.use(errors.nullMiddleware);

// Export the router
export default router;
