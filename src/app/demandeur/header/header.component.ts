import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: any;

  constructor(private router: Router) { }

  ngOnInit() {}



  home() {
    this.router.navigateByUrl('/contact');
  }
}
