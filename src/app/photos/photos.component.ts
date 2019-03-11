import { Component, OnInit } from '@angular/core';
import {ImageService} from './services/image.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  image:any
  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.image = this.imageService.getImage(+ this.route.snapshot.params[id])
  }

}
