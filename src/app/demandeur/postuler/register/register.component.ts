import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../controller/service/user.service";
import {User} from "../../../controller/model/user.model";
import {AllusersService} from "../../../controller/service/allusers.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  get allusersservice(): AllusersService {
    return this._allusersservice;
  }



  constructor(private _allusersservice : AllusersService , private user: User) { }

  ngOnInit(): void {
  }

  saveuser() {
    this.allusersservice.registerUser(this.user);
  }
}
