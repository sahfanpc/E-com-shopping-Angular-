import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { DatasarviceService } from 'src/app/datasarvice.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  currentImage: any;
  nextImage: any;
  splitting: boolean = false;
  imageUrl: string[] = [
    '/assets/carousel/carousel2--1.jpg',
    '/assets/carousel/carousel2--3.jpg',
    '/assets/carousel/carousel2--4.jpg',
    '/assets/carousel/carousel2--5.jpg',
    '/assets/carousel/carousel2--6.jpg'
  ];
  constructor(private router: Router, private db: DatasarviceService) {}
  ngOnInit() {
    this.startCarousel();
    AOS.init()
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
