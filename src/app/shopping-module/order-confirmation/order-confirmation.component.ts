import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasarviceService } from 'src/app/datasarvice.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: {displayDefaultIndicatorType: false},
  //   },
  // ],
})
export class OrderConfirmationComponent {
address:any;
product:any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,private router:Router,private db:DatasarviceService) {}

  ngOnInit(){
    this.Orderdetails();
    // console.log(this.address,"fuck");
    
  }
  Orderdetails(){
    // console.log("sdcsdcsdcsdcdsc");
 this.address=this.db.token[0];
 console.log(this.address,"adres");
 this.product=this.db.orderbefore;
 console.log(this.product,"product");
 
  }
  


}
