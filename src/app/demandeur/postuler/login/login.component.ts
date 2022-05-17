<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { VarService } from 'src/app/controller/service/var.service';
=======
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/controller/model/user.model';
import {AllusersService} from 'src/app/controller/service/allusers.service';
>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;
  user: User = new User();
<<<<<<< HEAD
  constructor(
    private allusersService: AllusersService,
    private router: Router,
    private varService: VarService
  ) {}
=======

  constructor(private allusersService: AllusersService,
              private router: Router
  ) {
  }
>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3

  ngOnInit(): void {}

  onSubmit() {
    this.allusersService.loginUser(this.user).subscribe((x: any) => {
      if (x == 1) {
        this.varService.setIsLogged(true);
        this.router.navigate(['/choisir-postuler']);
      } else {
        this.varService.setIsLogged(false);
      }
    });
  }
<<<<<<< HEAD
=======

  addUser() {
    this.allusersService.loginUser(this.user).subscribe(data => {
      console.log(data);
      console.log("here")
    })
  }

  onSubmit() {
    console.log(this.user);
    this.addUser();
  }

>>>>>>> e2ca47535abf211f28e4c331f849dd356920aac3
}
