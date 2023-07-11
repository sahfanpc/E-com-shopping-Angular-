import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { MatButtonModule } from '@angular/material/button';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.scss'],
  // imports: [
  //   MatButtonModule,
  //   UpperCasePipe,
  //   CurrencyPipe,
  //   NgSwitch,
  //   NgSwitchCase,
  //   MatProgressBarModule,
  //   FormsModule,
  // ],
  // standalone: true,
})
export class DescriptionProductComponent {
  description: any;
  type:any;
  price: any;
  alldatas:any;
  // alldata: any;
  counter: number = 1;
  selectedOption: any;
  constructor(private db: DatasarviceService, private router: Router) {}
  ngOnInit(): void {
    this.function();
    this.type=this.description.type;
    // console.log(this.selectedOption);
  }

  // for get the sinlge rpoduct data
  function() {
    this.description = this.db.product;
    console.log(this.description, 'v');

    this.price = 2.4 * this.description.price;

    this.alldatas = {
      id: this.description.id,
      price: this.description.price,
      bace: this.description.base,
      title: this.description.title,
      ideal: this.description.ideal,
      category: this.description.category,
      image: this.description.image,
      description: this.description.description,
      realprice: this.price,
      type: this.description.type,
      numberOfItem: this.counter,
      item: this.selectedOption,
    };
    // console.log(this.alldata, 'all');
  }
  // routing to cart-page
  Cart() {
    // console.log(this.counter, this.selectedOption, 'cart');

    // console.log(this.description);
    // console.log(this.counter, 'counter', this.selectedOption, 'selectedoption');
    if(this.type == ('appliance')){
      const check = this.db.Cart(this.alldatas);
      // this.router.navigateByUrl('cart-page');
      if (check) {
        alert('added');
      } else {
        alert('allready exist');
      }
    }else if(this.type == ('home')){
      const check = this.db.Cart(this.alldatas);
      // this.router.navigateByUrl('cart-page');
      if (check) {
        alert('added');
      } else {
        alert('allready exist');
      }
    }else if(this.type == ('toy')){
      const check = this.db.Cart(this.alldatas);
      // this.router.navigateByUrl('cart-page');
      if (check) {
        alert('added');
      } else {
        alert('allready exist');
      }
    }
    else{
      if (this.selectedOption) {
        // this.alldata.unshift();
        const check = this.db.Cart(this.alldatas);
        // this.router.navigateByUrl('cart-page');
        if (check) {
          alert('added');
        } else {
          alert('allready exist');
        }
      } else {
        alert('please select your option');
      }
    }
  }
  increment() {
    this.counter++;
    // console.log('-');
  }
  decrement() {
    if (this.counter > 1) {
      this.counter--;
      // console.log('+');
    }
  }
  Order(){

    if(this.type == 'appliance' ){
      this.db.orderproduct(this.alldatas)
      this.router.navigateByUrl('shopping/order-confirmation')
    }else if(this.type == 'home' ){
      this.db.orderproduct(this.alldatas)
      this.router.navigateByUrl('shopping/order-confirmation')
    }else if(this.type == 'toy' ){
      this.db.orderproduct(this.alldatas)
      this.router.navigateByUrl('shopping/order-confirmation')
    }
    else{

    if(this.selectedOption){
      console.log(this.alldatas,"rrr");
      this.db.orderproduct(this.alldatas)
      this.router.navigateByUrl('shopping/order-confirmation')
    } else {
      alert('please select your option');
    }
  }
  }
}
