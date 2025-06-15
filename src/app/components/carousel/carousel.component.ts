import { Component, OnInit, OnDestroy } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {

  constructor(private dialog: MatDialog) { }
  
  images = [
    {
      src: 'assets/external/home-screen-1.png',
      title: 'Image One',
      description: 'Description for image one',
    },
    {
      src: 'assets/external/home-screen-2.png',
      title: 'Image Two',
      description: 'Description for image two',
    },
    {
      src: 'assets/external/about-img.png',
      title: 'Image Three',
      description: 'Description for image three',
    },
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }
}
