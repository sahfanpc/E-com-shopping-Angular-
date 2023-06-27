import { Component, Input } from '@angular/core';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { Router, RouterLink } from '@angular/router';

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
  constructor(private db: DatasarviceService, private router: Router) {}

  ngOnInit() {
    this.productData();
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
  }

  Detailpage(data: any) {
    this.db.descriptionProduct(data);
    this.router.navigateByUrl('description-product');
  }
  Grosery() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('grosery');
  }
  Home() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('home');
  }
  Appliance() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('appliance');
  }
  Fasion() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('fasion');
  }
  Laptop() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('laptop');
  }
  Protien() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('protien');
  }
  Mobile() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('mobile');
  }
  Toys() {
    this.router.navigateByUrl('item-group');
    this.db.itemgroup('toys');
  }
}
