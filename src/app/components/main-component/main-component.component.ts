import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {
  name: string = "kumar";
  count: number = 0;
  count1: Number = 0;
  date: Date = new Date;
  color: boolean = false;
  data: any;
  parentData: any[] = ["name", "id"];

  constructor(private service: TestService) { }

  ngOnInit() {
    this.getDataFromService();
  }


  onclock() {
    console.log("button clicked-->", this.count);
    this.color = true;
    console.log(this.service.displayOutput(this.count, this.count1))
  }

  getDataFromService() {
    this.service.getData().subscribe((response: any) => {
      console.log("data is -->", response);
      this.data = response;
    });

  }
  parentFunction(event: any) {
    console.log("parent Function is calling-->", event);
  }


}
