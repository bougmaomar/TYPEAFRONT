import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {ContactComponent} from "../contact/contact.component";
import {AllusersService} from "../../controller/service/allusers.service";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: any;

  constructor(private router: Router, private allusers: AllusersService) {
  }

  ngOnInit() {
  }


  home() {
    this.router.navigateByUrl('/contact');
  }

  logout() {
    this.allusers.logoutUser().subscribe(data => {
      if (data == 1) {
        console.log("pas erreur")
      } else {
        console.log("erreur");
      }
    })
  }
}
