import { Component, OnInit } from '@angular/core';
import {User} from "../../../controller/model/user.model";
import {AllusersService} from "../../../controller/service/allusers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private allusersService: AllusersService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.allusersService.registerUser(this.user).subscribe(data => {
      console.log(data);
    })
  }

  onSubmit() {
    console.log(this.user);
    this.addUser();
  }

}
