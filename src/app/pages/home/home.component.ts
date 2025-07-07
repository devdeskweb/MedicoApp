import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser'
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobile = AppConstants.Mobile;
  testimonials = [
    {
      author: 'Mercy Mathew',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ratione
      commodi aspernatur magni reprehenderit fuga dolorum, enim laboriosam
      inventore impedit. Veritatis, aliquid laborum ratione numquam totam
      sit ab sed eaque.`,
      image: 'assets/external/testimonials-1.png',
    },
    {
      author: 'James Doe',
      text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo i
      nventore veritatis et quasi architecto magnam aliquam quaerat voluptatem.`,
      image: 'assets/external/testimonials-1.png',
    },
    {
      author: 'Riya Kapoor',
      text: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt 
      ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum`,
      image: 'assets/external/testimonials-1.png',
    },
  ];

  currentIndex = 0;
  intervalId: any;
  
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('Home')
  }

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // change testimonial every 5 seconds
  }

  stopAutoScroll(): void {
    clearInterval(this.intervalId);
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }

}
