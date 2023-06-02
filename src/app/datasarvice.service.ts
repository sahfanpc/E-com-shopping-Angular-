import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatasarviceService {
  constructor(private http: HttpClient) {}

  getuserdetail() {
    // this.http.
  }
}
