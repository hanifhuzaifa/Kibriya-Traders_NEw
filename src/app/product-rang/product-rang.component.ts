import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as Aos from 'aos';

@Component({
  selector: 'app-product-rang',
  templateUrl: './product-rang.component.html',
  styleUrls: ['./product-rang.component.css']
})
export class ProductRangComponent implements OnInit {
  card: any = [];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    Aos.init();
    this.card = [
      {img:"../../assets/food.png",button:"View Range",h4:"Food & Grocery"},
      {img:"../../assets/e3fee07df7db0a76118e9d112ed0b5a5.jpg",button:"View Range",h4:"Electronic"},
      {img:"../../assets/gym.png",button:"View Range",h4:"Gym & Fitness"},
      {img:"../../assets/cop.png",button:"View Range",h4:"Coporate Gifts"},
      {img:"../../assets/Household appliances.jpg",button:"View Range",h4:"Household appliances"},
      {img:"../../assets/dryyyyyy.jpg",button:"View Range",h4:"Dry Fruits"},
      {img:"../../assets/Kitchen fitouts.jpg",button:"View Range",h4:"Kitchen fitouts "},
      {img:"../../assets/foodpkgjpg.png",button:"View Range",h4:"Food packaging"},
      {img:"../../assets/toolsjpg.png",button:"View Range",h4:"Hardware and tools"},
      {img:"../../assets/bedjpg.png",button:"View Range",h4:"Bedding and Home decoration"},
      {img:"../../assets/stationaryjpg.jpg",button:"View Range",h4:"Stationary and office supplies"},
      {img:"../../assets/promotion.png",button:"View Range",h4:"Promotional products"},
      {img:"../../assets/-packaging.png",button:"View Range",h4:"Packaging"},
    ]
  }

  Open() {
    var navbar = document.getElementById('navbar');
    navbar?.classList.add('open')
  }

  Close() {
    var navbar = document.getElementById('navbar');
    navbar?.classList.remove('open')
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
  

  post(){
    const obj= this.qoute.value;
    this.http.post("https://kibtradapi.somee.com/api/Controller/SaveQoute/obj",obj).subscribe((res:any)=>{
      alert("Your Qoute is Sent Successfully... We Will Get touch with you soon")
      this.qoute.reset();
    })
  }
  get(){
    this.http.get("https://kibtradapi.somee.com/api/Controller/GetQoutes").subscribe((res:any)=>{
  
    })
  }

}
