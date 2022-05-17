<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ContactComponent } from '../contact/contact.component';
import { AllusersService } from '../../controller/service/allusers.service';
import { User } from '../../controller/model/user.model';
import { VarService } from 'src/app/controller/service/var.service';
=======
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {ContactComponent} from "../contact/contact.component";
import {AllusersService} from "../../controller/service/allusers.service";
import {User} from "../../controller/model/user.model";
>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu: any;
<<<<<<< HEAD
  isLogged: boolean;

  constructor(
    private router: Router,
    private allusers: AllusersService,
    private varService: VarService
  ) {}
=======
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
>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3

  ngOnInit() {}

  home() {
    this.router.navigateByUrl('/contact');
  }

<<<<<<< HEAD
  logout() {
    this.allusers.logoutUser().subscribe((data) => {});
  }
=======
  // addUser() {
  //   this.allusersService.loginUser(this.user).subscribe(data => {
  //     console.log(data);
  //     if (data === 1)
  //       this.logged = true;
  //     else
  //       this.logged = false;
  //   })
  // }
>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3
}
