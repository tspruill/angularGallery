import {Routes} from '@angular/routes'
import {GalleryComponent} from './app/gallery/gallery.component'
import {PhotosComponent} from './app/photos/photos.component'

export const appRoutes:Routes = [
{path: "gallery", component: GalleryComponent},
{path: "image/:id", component: PhotosComponent},
{path: "", redirectTo: "/gallery", pathMatch: 'full' },
]