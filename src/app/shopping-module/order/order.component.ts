import { Component } from '@angular/core';
import { DatasarviceService } from 'src/app/datasarvice.service';
import { CommonModule, NgForOf } from '@angular/common';
// import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  value1: any;
  constructor(private db: DatasarviceService) {}

  ngOnInit(): void {
    this.functionvalue();
  }
  functionvalue() {
    this.value1 = this.db.orderafter;
    console.log(this.value1, 'after');
  }
}
