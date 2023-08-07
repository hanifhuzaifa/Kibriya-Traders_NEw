import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrls: ['./order-process.component.css']
})
export class OrderProcessComponent implements OnInit {
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
