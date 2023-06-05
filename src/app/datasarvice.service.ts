import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatasarviceService {
  Userdatas: Array<any> = [];
  alertcheck: any;
  constructor(private http: HttpClient) {}
  // user detail
  userData(value: any) {
    this.Userdatas.push({
      username: value.username,
      email: value.regemail,
      number: value.number,
      pincode: value.pin,
      address: value.address,
      password: value.regpassword,
    });
    console.log(this.Userdatas);
  }
  // login
  userLogin(value: any) {
    const usercheck = this.Userdatas.filter((e) => e.email == value.email);
    if (usercheck.length != 0) {
      const usercheckpassword = this.Userdatas.filter(
        (e) => e.password == value.password
      );
      if (usercheckpassword.length != 0) {
        this.alertcheck = true;
      } else {
        this.alertcheck = false;
      }
    } else {
      this.alertcheck = false;
    }
    return this.alertcheck;
  }
}
