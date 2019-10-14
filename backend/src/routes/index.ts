import {Router} from 'express';
import {createPhoto, getPhotos} from '../controllers/photo.controller';

const router = Router();


router.route('/photos')
    .get(getPhotos)
    .post(createPhoto)
   

export default router;