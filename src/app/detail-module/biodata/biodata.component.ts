import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import * as AOS from 'aos';
import * as AOS from 'aos';
import { DatasarviceService } from 'src/app/datasarvice.service';
@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss'],
})
export class BiodataComponent {
  showFiller = false;
  currentImage: any;
  nextImage: any;
  splitting: boolean = false;
  imageUrl: string[] = [
    'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2373730/pexels-photo-2373730.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];
  constructor(private router:Router,private db:DatasarviceService){}
  ngOnInit() {
    this.startCarousel();
    AOS.init();
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
