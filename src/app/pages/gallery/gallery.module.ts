import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ComponentsModule } from "../../components/components.module";


const routes: Routes = [
  { path: '', component: GalleryComponent }
];

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
]
})
export class GalleryModule { }
