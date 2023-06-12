import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { MatButtonModule } from '@angular/material/button';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.scss'],
  imports: [MatButtonModule, UpperCasePipe, CurrencyPipe],
  standalone: true,
})
export class DescriptionProductComponent {
  description: any;
  price: any;
  constructor(private db: DatasarviceService, private router: Router) {}
  ngOnInit(): void {
    this.function();
  }

  function() {
    this.description = this.db.product;
    this.price = 2 * this.description.price;
    // console.log(price, 'jnjn');
  }
}
