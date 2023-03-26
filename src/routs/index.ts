import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SeacherController from '../controllers/seacherController';

const router = Router();

router.get('/',PageController.home);
router.get('/dogs',PageController.dogs);
router.get('/cats',PageController.cats);
router.get('/fishes',PageController.fishes);

router.get('/seacher',SeacherController.seacher);

export default router;