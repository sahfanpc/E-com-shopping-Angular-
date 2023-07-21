import { Component, Input } from '@angular/core';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { Router, RouterLink } from '@angular/router';
import { Data } from '../alldatas';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  // standalone: true,

  // imports: [
  // MatCardModule,
  // MatButtonModule,
  // MatStepperModule,
  // FormsModule,
  // ReactiveFormsModule,
  // MatButtonModule,
  // NgForOf,
  // RouterLink,
  // ], // Add CUSTOM_ELEMENTS_SCHEMA
})
export class ProductDetailComponent {
  firstRowProducts: any; //all products
  secondRowProducts: any;
  thirdRowProducts: any;
  forthRowProducts: any;
  fifthRowProducts: any;
  sixthRowProducts: any;
  seventhRowProducts: any;
  searchitem:any;
  searchResults:Array<any>=[];
  searchresult:any
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
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];
  constructor(private db: DatasarviceService, private router: Router) {}

  ngOnInit() {
    this.productData();
    this.startCarousel();
    this.searchresult=Data;
  }

  productData() {
    this.firstRowProducts = this.db.products.shoes;
    const chappel = this.db.products.chappel;
    const socks = this.db.products.socks;
    const appliance = this.db.products.appliance;
    const mobile = this.db.products.mobile;
    const home = this.db.products.home;
    const fasion = this.db.products.fasion;
    const grosery = this.db.products.grosery;
    const protien = this.db.products.protien;
    const toy = this.db.products.toys;
    const tab = this.db.products.tablet;
    this.secondRowProducts = chappel.concat(socks);
    this.thirdRowProducts = mobile.concat(tab);
    this.forthRowProducts = home.concat(appliance);
    this.fifthRowProducts = protien.concat(grosery);
    this.sixthRowProducts = fasion.concat(toy);
    this.seventhRowProducts = this.db.products.laptop;
    this.searchResults.push(Data[0])
    console.log(this.searchResults,"fuck");
    
  }

  Detailpage(data: any) {
    this.db.descriptionProduct(data);
    this.router.navigateByUrl('shopping/description-product');
  }
  Grosery() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('grosery');
  }
  Home() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('home');
  }
  Appliance() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('appliance');
  }
  Fasion() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('fasion');
  }
  Laptop() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('laptop');
  }
  Protien() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('protien');
  }
  Mobile() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('mobile');
  }
  Toys() {
    this.router.navigateByUrl('shopping/item-group');
    this.db.itemgroup('toys');
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
  search() {
    if (this.searchitem.trim()) {
      this.searchresult = Data.filter((item: any) =>
        item.base.toLowerCase().includes(this.searchitem.toLowerCase())
      );
    } else {
      this.searchresult = Data;
    }
  }
}
