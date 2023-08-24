import { Component, HostListener, OnInit } from '@angular/core';
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
count : any
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

@HostListener('document:click', ['$event'])
onClick(event: MouseEvent): void {
  var navbar = document.getElementById('navbar');
  if((event.target as HTMLElement).id === 'menuicon') {
  } else {
    this.Close();
  }
}

Open() {
  var navbar = document.getElementById('navbar');
  navbar?.classList.add('open')
  this.count = true
}

Close() {
  var navbar = document.getElementById('navbar');
    navbar?.classList.remove('open')
}



post(){
  const obj= this.qoute.value;
  this.http.post("http://www.kibtradapi.somee.com/api/Controller/SaveQoute/obj",obj).subscribe((res:any)=>{
    alert("Your Qoute is Sent Successfully... We Will Get touch with you soon")
    this.qoute.reset();
  })
}
get(){
  this.http.get("https://kibtradapi.somee.com/api/Controller/GetQoutes").subscribe((res:any)=>{

  })
}

// comment= new FormGroup({
//   name:new FormControl(""),
//   cummint:new FormControl("")
// })

// postcomment(){
//   // debugger
//   const obj= this.comment.value;
//   this.http.post("https://localhost:50755/api/Controller/savecummint/obj",obj).subscribe((res:any)=>{
//     alert("Your comment is Sent Successfully...")
//     this.comment.reset();
//   })
// }
// getcomment(){
//   this.http.get("https://localhost:44389/api/Controller/getcummint").subscribe((res:any)=>{

//   })
// }


}
