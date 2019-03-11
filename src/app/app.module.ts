import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ImageService  } from './photos/services/image.service';
import { FilterPipe } from './photos/services/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    PhotosComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
