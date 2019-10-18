import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{PhotoService} from '../../services/photo-service.service';
import{Photo} from '../../interface/photo';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  id: string;
  photo: Photo;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService   
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
     this.id= params['id'];
     this.photoService.getPhoto(this.id)
     .subscribe(
       res => {
         this.photo = res;
       },
       err => console.log(err)
     )
    })
  }
  deletePhoto(id: string){
    this.photoService.deletePhoto(id)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/photos']);
      },
      err => console.log(err)
    )
  }
}
