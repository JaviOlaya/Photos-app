import {Request, Response} from 'express';

export function createPhoto(req: Request, res: Response){

    
    return res.json({
        message: 'Foto guardada correctamente'
    })
}