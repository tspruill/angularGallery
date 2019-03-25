import { Component, OnChanges, Input } from '@angular/core';
import {ImageService} from '../photos/services/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  visableImages: any[] = [];
  images:any[];
  title = 'Gallery';
  
  filterBy?:string = 'all';
  
  
  constructor(private imageService:ImageService) { 
     console.log(this.filterBy)
     this.visableImages = this.imageService.getImages(); 
  }

  ngOnChanges(){
     this.visableImages = this.imageService.getImages();
     
  
  }
   changeFilter(filter:string){
      this.filterBy = filter;
   }
}
