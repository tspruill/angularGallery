import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ImageService  } from './photos/services/image.service';
import { FilterPipe } from './photos/services/filter.pipe';
import {appRoutes} from '../routes';
import { ImageComponent } from './photos/image.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    PhotosComponent,
    FilterPipe,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
