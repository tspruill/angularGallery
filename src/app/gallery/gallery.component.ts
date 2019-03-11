import { Component, OnChanges, Input } from '@angular/core';
import {ImageService} from '../photos/services/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  visableImages: any[] = [];
  title = 'Gallery';
  
  @Input() filterBy?:string = 'all';
  
  
  constructor(private imageService:ImageService) { 
     this.visableImages = this.imageService.getImages(); 
  }

  ngOnChanges(){
     this.visableImages = this.imageService.getImages();
     
  
  }

}
