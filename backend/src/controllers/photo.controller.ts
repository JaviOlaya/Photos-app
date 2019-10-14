import {Request, Response} from 'express';

export function getPhotos(req: Request, res: Response){

}

export function createPhoto(req: Request, res: Response){

    console.log('Guardando foto')

    return res.json({
        message: 'Foto guardada correctamente'
    })
}