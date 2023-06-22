import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Data } from './data';
import { Data } from './datas';

@Injectable({
  providedIn: 'root',
})
export class DatasarviceService {
  products = Data; //all products
  Userdatas: Array<any> = []; //datas of users
  alertcheck: any; //using check true or false for alert
  product: any; //current product detail
  cart: Array<any> = [];
  cartalert: any;
  Saparateddata: any;
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
  //single product detail
  descriptionProduct(data: any) {
    this.product = data;
    // console.log(this.product, 'product');
  }
  description(data: any) {
    this.product = null;
    this.product = data;
  }

  // cart
  Cart(data: any) {
    // console.log(data, 'cart');
    if (this.cart.length == 0) {
      this.cart.push(data);
      this.cartalert = true;
    } else {
      const check = this.cart.filter(
        (e: any) =>
          e.id == data.id && e.base == data.base && e.title == data.title
      );
      if (check.length == 0) {
        this.cart.push(data);
        this.cartalert = true;
      } else {
        // console.log('already exist');
        this.cartalert = false;
      }
    }
    // console.log(this.cart, 'service cart');
    return this.cartalert;
  }

  getcart() {
    return this.cart;
  }
  removeItem(index: any) {
    this.cart.splice(index, 1);
  }

  itemgroup(data: any) {
    if (data == 'grosery') {
      this.Saparateddata = this.products.grosery;
      console.log(this.Saparateddata, 'ww');
    } else if (data == 'home') {
      this.Saparateddata = this.products.home;
    } else if (data == 'appliance') {
      this.Saparateddata = this.products.appliance;
    } else if (data == 'fasion') {
      this.Saparateddata = this.products.fasion;
    } else if (data == 'laptop') {
      this.Saparateddata = this.products.laptop;
    } else if (data == 'mobile') {
      this.Saparateddata = this.products.mobile;
    } else if (data == 'protien') {
      this.Saparateddata = this.products.protien;
    } else if (data == 'toys') {
      this.Saparateddata = this.products.toys;
    } else {
      console.log('nothing');
    }
    // const product = this.products.filter((e:any) => e==data)
    console.log(data);
  }
}
