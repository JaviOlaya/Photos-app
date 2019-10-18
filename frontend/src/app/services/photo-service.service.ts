import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../interface/photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos'

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File){
   const fData= new FormData();
   fData.append('title',title);
   fData.append('description',description);
   fData.append('image',photo);
    return this.http.post(this.URI,fData);
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.URI);
  }
  getPhoto(id: string){
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }
  deletePhoto(id: string){
    return this.http.delete(`${this.URI}/${id}`);
  }
  
}
