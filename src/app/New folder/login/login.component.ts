import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient, private router: Router){}

  username:any="username1";
  password:any="password1";

  loginform = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })
   getuser() {
    if(this.loginform.controls['username'].value === "username1" && this.loginform.controls['password'].value === "password1") {
      this.router.navigate(['/data/data'])
    } else {
      alert("Invalid username or password")
    }
  }


  data: any = [];
  Getdata() {
    this.http.get("https://kibtradapi.somee.com/api/Controller/GetContacts").subscribe((res: any) => {
      this.data = res;
    })
  }

  
}
