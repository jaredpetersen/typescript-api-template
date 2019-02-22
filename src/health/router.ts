'use strict';

import { Router } from 'express';
import * as health from './index';

// Router
const router = Router();

// Health
router.get('/', health.status);

export default router;
