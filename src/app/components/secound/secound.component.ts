import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.scss']
})
export class SecoundComponent {


  @Input() data: any[] = [];
  @Output() click = new EventEmitter<any>();
  childData: String = "child data";
  getdata: any;
  constructor(private service: TestService) { }

  ngOnInit() {
    console.log("data in child -->", this.data);
  }

  onClick() {
    this.click.emit(this.childData);
    this.service.display();
    this.service.getData().subscribe((data: any) => {
      console.log("get data from server-->", data)
      this.getdata = data;
    })
  }


}
