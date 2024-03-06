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
    return this.http.get(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8`);
  }

}
