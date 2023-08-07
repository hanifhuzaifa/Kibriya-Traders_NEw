import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
