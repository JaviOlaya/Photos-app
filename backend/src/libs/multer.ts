import multer from 'multer';
import uuid from 'uuid/v4';
import path from 'path';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, res, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

export default storage;