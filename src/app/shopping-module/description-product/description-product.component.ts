import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { MatButtonModule } from '@angular/material/button';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.scss'],
  imports: [
    MatButtonModule,
    UpperCasePipe,
    CurrencyPipe,
    NgSwitch,
    NgSwitchCase,
  ],
  standalone: true,
})
export class DescriptionProductComponent {
  description: any;
  price: any;
  alldata: any;
  constructor(private db: DatasarviceService, private router: Router) {}
  ngOnInit(): void {
    this.function();
  }

  // for get the sinlge rpoduct data
  function() {
    this.description = this.db.product;
    console.log(this.description, 'v');

    this.price = 2.4 * this.description.price;
    this.alldata = {
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
    };
    console.log(this.alldata, 'all');
  }
  // routing to cart-page
  Cart() {
    // console.log(this.description);

    const check = this.db.Cart(this.alldata);
    // this.router.navigateByUrl('cart-page');
    if (check) {
      alert('added');
    } else {
      alert('allready exist');
    }
  }
}
