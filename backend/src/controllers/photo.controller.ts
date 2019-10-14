import {Request, Response} from 'express';
import Photo from '../models/Photo';

export async function getPhotos(req: Request, res: Response): Promise <Response> {
    const photos = await Photo.find();
    return res.json(photos);
}

export async function createPhoto(req: Request, res: Response): Promise <Response>{

    const { title, description } = req.body;
    console.log(req.file.path)
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    await photo.save();
    return res.json({
        message: 'Foto guardada correctamente'
    })
}