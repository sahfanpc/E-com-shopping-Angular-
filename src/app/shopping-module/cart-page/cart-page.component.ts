import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,RouterLink
  ],
  standalone: true,
})
export class CartPageComponent {
  cartdata: any;
  cartlength:any;
  cartprice:number=0;
  realprice:number=0;
  cartdiscount:number=0;
  totalamount:number=0;
  constructor(private db: DatasarviceService,private router:Router) {}
  ngOnInit() {
    this.getCartData();
    this.cartdiscount =this.realprice - this.cartprice;
    this.totalamount=this.cartprice + 40;
  }
  getCartData() {
    this.cartdata = this.db.cart;
this.cartlength=this.db.cart.length;
    console.log(this.cartdata,"set");
    for(let i=0;i<this.cartlength;i++){
this.cartprice+=this.cartdata[i].price;
this.realprice+=this.cartdata[i].realprice
console.log(this.cartprice);

    }
  }
  submit(data:any){
console.log(data,"this");
this.db.description(data);
this.router.navigateByUrl('description-product')

  }
}
