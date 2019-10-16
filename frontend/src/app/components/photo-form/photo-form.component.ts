import { Component, OnInit } from '@angular/core';
import {PhotoService}from '../../services/photo-service.service';
interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File; 
  photoSelected: string | ArrayBuffer ;
  constructor(private  photoService: PhotoService) { }

  ngOnInit() {
  }
  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //
      const file_reader = new FileReader();
      file_reader.onload = e => this.photoSelected = file_reader.result;
      file_reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.photoService.createPhoto(title.value, description.value, this.file)
    .subscribe(res => console.log(res), err => console.log(err))
    return false; // se introduce para evitar el reinicio 
  }
}