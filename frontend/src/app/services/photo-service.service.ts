import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
