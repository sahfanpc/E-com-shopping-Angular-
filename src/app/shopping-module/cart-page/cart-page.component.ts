import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    NgForOf,
  ],
  standalone: true,
})
export class CartPageComponent {
  cartdata: any;
  constructor(private db: DatasarviceService) {}
  ngOnInit() {
    this.getCartData();
  }
  getCartData() {
    this.cartdata = this.db.cart;
    console.log(this.cartdata);
  }
}
