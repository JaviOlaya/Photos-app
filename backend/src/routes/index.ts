import {Router} from 'express';
import {createPhoto, getPhotos} from '../controllers/photo.controller';
import multer from '../libs/multer';

const router = Router();


router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)
   

export default router;