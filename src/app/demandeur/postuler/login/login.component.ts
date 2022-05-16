import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private allusersService: AllusersService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.allusersService.loginUser(this.user).subscribe(data =>{
      console.log(data);
    })
  }

  onSubmit(){
    console.log(this.user);
    this.addUser();
  }

}
