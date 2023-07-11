import { Component } from '@angular/core';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss'],
  // standalone: true,
  // imports: [NgForOf, MatCardModule],
})
export class ItemGroupComponent {
  data: any;

  constructor(private db: DatasarviceService,private router:Router) {}

  ngOnInit() {
    this.value();
  }

  value() {
    this.data = this.db.Saparateddata;
    console.log(this.data, 'item');
  }
  Product(data:any){
    this.db.descript(data);
    this.router.navigateByUrl('shopping/description-product')
  }
}
