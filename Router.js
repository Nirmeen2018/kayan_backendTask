import {Router} from 'express';
import { handleLogin,handleGetDoctors,handleAddVisit,handleGetVisit,handleUpdateVisit} from './Login.js';

const router =Router();

router.put('/login',handleLogin);
router.get('/getDoctors',handleGetDoctors);

 router.post('/addVisit',handleAddVisit);
 router.put('/getVisit',handleGetVisit);
 router.put('/updateVisit',handleUpdateVisit);

export default router;