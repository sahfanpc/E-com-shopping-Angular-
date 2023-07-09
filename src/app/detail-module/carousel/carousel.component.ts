import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasarviceService } from 'src/app/datasarvice.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  // images: string[] = [this.imageUrl, 'boidata1 (2).jpg', 'boidata1 (2).jpg'];
  currentImage: any;
  nextImage: any;
  splitting: boolean = false;
  imageUrl: string[] = [
    '/assets/carousel/carousel--3.jpg',
    '/assets/carousel/carousel--4.jpg',
    '/assets/carousel/carousel--5.jpg',
    '/assets/carousel/carousel--6.jpg',
    '/assets/carousel/carousel--7.jpg',
    '/assets/carousel/carousel--8.jpg',
    '/assets/carousel/carousel--9.jpg',
  ];
  constructor(private router: Router, private db: DatasarviceService) {}
  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    this.currentImage = this.imageUrl[0];
    this.nextImage = this.imageUrl[1];
    setInterval(() => {
      this.splitting = true;
      setTimeout(() => {
        this.splitting = false;
        this.currentImage = this.nextImage;
        const currentIndex = this.imageUrl.indexOf(this.currentImage);
        const nextIndex = (currentIndex + 1) % this.imageUrl.length;
        this.nextImage = this.imageUrl[nextIndex];
      }, 1000);
    }, 4000);
  }

  imageLoaded() {
    // Remove the split effect once the image has loaded
    this.splitting = false;
  }
}
