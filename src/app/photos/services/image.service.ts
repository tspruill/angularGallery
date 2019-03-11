import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
 visableImages = [];
  constructor() { }
  
  getImages(){
   return this.visableImages = IMAGES.slice(0);
  }
  
  getImage(id: number){
    return IMAGES.slice(0).find(image => image.id == id );
  }
}

const IMAGES =  [
{"id": 1, "category": "meme", "description": "Nick Harwood", "url":"assets/photos/harwood.png"},
{"id": 2, "category": "nicky", "description": "Colorful women", "url":"assets/photos/nicky_01.jpg"},
{"id": 3, "category": "peele", "description": "Whale", "url":"assets/photos/peele_03.jpeg"},
{"id": 4, "category": "meme", "description": "Ehuit", "url":"assets/photos/ehuit.png"},
{"id": 5, "category": "peele", "description": "Rose Skull", "url":"assets/photos/peele_01.jpeg"},
{"id": 6, "category": "peele", "description": "Sick Boy", "url":"assets/photos/peele_02.jpeg"},
{"id": 7, "category": "nicky", "description": "Abstract Lady", "url":"assets/photos/nicky_02.jpg"}
]