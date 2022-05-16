import { Component, OnInit } from '@angular/core';
import {User} from "../../../controller/model/user.model";
import {AllusersService} from "../../../controller/service/allusers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public get user(): User {
    return this._user;
  }


  private _user: User = new User();
  constructor(private allusers: AllusersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.allusers.loginUser(this._user).subscribe(data =>{
      if(data == 1){
        console.log("pas erreur")
      }else{
        console.log("erreur");
      }
    })
  }
}
