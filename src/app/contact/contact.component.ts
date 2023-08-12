import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl } from '@angular/forms';
import * as Aos from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    Aos.init(); 
  }
  fgroup  = new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    phonenumber:new FormControl(""),
    subject:new FormControl(""),
    message:new FormControl(""),
  })

Open() {
  var navbar = document.getElementById('navbar');
  navbar?.classList.add('open')
}

Close() {
  var navbar = document.getElementById('navbar');
    navbar?.classList.remove('open')
}

post(){
  const obj = this.fgroup.value;
  this.http.post("https://kibtradapi.somee.com/api/Controller/SaveContact/data",obj).subscribe((res:any)=>{
    alert("Your Contact Information is sent Successfully... We Will Get touch with you soon");
    this.fgroup.reset();
  })
}

data: any = [];
  Getdata() {
    this.http.get("https://kibtradapi.somee.com/api/Controller/GetContacts").subscribe((res: any) => {
      this.data = res;
    })
  }


}

