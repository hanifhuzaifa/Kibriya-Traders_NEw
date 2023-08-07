import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    Aos.init();
  }

//  show(e: any = HTMLElement) {
//     const nextSib = e.previousElementSibling.lastElementChild as HTMLElement;
//     if (nextSib.className === "a1") {
//       nextSib.className = "a1Show";
//     } else {
//       nextSib.className = 'a1';
//     }
//   }

readmore:boolean=true
visible:boolean=false

show(){
  this.readmore = !this.readmore;
  this.visible = !this.visible;
}

qoute=new FormGroup({
  Name:new FormControl(""),
  Email:new FormControl(""),
  Phone:new FormControl(""),
  Shipping_Destination:new FormControl(""),
  type_or_product:new FormControl(""),
  approx_product_quantity:new FormControl(""),
  url:new FormControl(""),
  Are_you_selling_this_product_already:new FormControl("")
})

send(){

}

Open() {
  var navbar = document.getElementById('navbar');
  navbar?.classList.add('open')
}

Close() {
  var navbar = document.getElementById('navbar');
    navbar?.classList.remove('open')
}



post(){
  const obj= this.qoute.value;
  this.http.post("https://localhost:44389/api/Controller/SaveQoute/obj",obj).subscribe((res:any)=>{
    alert("Your Qoute is Sent Successfully... We Will Get touch with you soon")
    this.qoute.reset();
  })
}
get(){
  this.http.get("https://localhost:44389/api/Controller/GetQoutes").subscribe((res:any)=>{

  })
}



}
