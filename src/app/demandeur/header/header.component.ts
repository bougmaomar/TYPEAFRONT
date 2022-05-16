import {Component, OnInit} from '@angular/core';
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
  user: User = new User();
  isloggedin : boolean;

  constructor(private router: Router, private allusersService: AllusersService) {
    this.isloggedin = true;
  }

  ngOnInit() {
    this.allusersService.loginUser(this.user).subscribe(data => {
      console.log(data)
    });
  }


  home() {
    this.router.navigateByUrl('/contact');
  }

  // addUser() {
  //   this.allusersService.loginUser(this.user).subscribe(data => {
  //     console.log(data);
  //     if (data === 1)
  //       this.logged = true;
  //     else
  //       this.logged = false;
  //   })
  // }
}
