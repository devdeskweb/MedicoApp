import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ComponentsModule } from "../../components/components.module";

const routes: Routes = [
  { path: '', component: ServicesComponent }
];

@NgModule({
  declarations: [ ServicesComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), ComponentsModule ]
})
export class ServicesModule { }
