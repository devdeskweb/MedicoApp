import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [NavBarComponent, ContactFormComponent, FooterComponent, AppointmentModalComponent, CarouselComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavBarComponent, ContactFormComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
