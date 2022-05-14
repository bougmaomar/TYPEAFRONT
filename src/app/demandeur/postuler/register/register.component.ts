import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../controller/service/user.service";
import {User} from "../../../controller/model/user.model";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  get user(): User {
    return this.userservice.user;
  }



  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }

  saveuser() {
    this.userservice.saveuser();
  }
}
