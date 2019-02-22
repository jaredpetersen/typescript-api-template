'use strict';

import { Router } from 'express';
import * as tasks from './index';

// Router
const router = Router();

// Tasks
router.get('/', tasks.findAll);
router.post('/', tasks.buggyRoute);

export default router;