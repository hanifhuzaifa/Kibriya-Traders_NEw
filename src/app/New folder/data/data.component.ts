import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  ngOnInit(): void {
    this.getConatcts();
    this.getQoutes();
  }

  contactdata: any =[]
  qoutesData : any = []
  constructor(private Http: HttpClient){}

  activeTab = 1;

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  getConatcts() {
    this.Http.get("https://kibtradapi.somee.com/api/Controller/GetContacts").subscribe((res: any) => {
      this.contactdata = res;
    })
  }

  getQoutes() {
    this.Http.get("https://kibtradapi.somee.com/api/Controller/GetQoutes").subscribe((res: any) => {
      this.qoutesData = res;
    })
  }

}
