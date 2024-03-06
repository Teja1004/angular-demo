import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private http: HttpClient) { }

  displayOutput(a: any, b: any) {
    console.log("service is calling")
    return a + b;
  }

  display() {
    console.log("service");
  }

  getData() {
    return this.http.get(`http://3.141.22.25:8080/api/v1/29/stripe/customer/customer-details`);
  }

}
