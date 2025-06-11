import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [
    {
      src: 'assets/home-screen-1.png',
      heading: 'Excellence in General & Gastrointestinal Surgery',
      subHeading: 'Providing advanced laparoscopic and laser treatments with precision and care.'
    },
    {
      src: 'assets/home-screen-1.png',
      heading: 'Pioneers in Minimally Invasive Surgery',
      subHeading: 'Delivering safe and effective procedures with shorter recovery time.'
    },
    {
      src: 'assets/home-screen-1.png',
      heading: 'State-of-the-art Gastroenterology',
      subHeading: 'Comprehensive care for all digestive health issues with top expertise.'
    }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }
}
