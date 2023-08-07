import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-product-rang',
  templateUrl: './product-rang.component.html',
  styleUrls: ['./product-rang.component.css']
})
export class ProductRangComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }

  Open() {
    var navbar = document.getElementById('navbar');
    navbar?.classList.add('open')
  }
  
  Close() {
    var navbar = document.getElementById('navbar');
      navbar?.classList.remove('open')
  }
  

}
