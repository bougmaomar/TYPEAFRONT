import { Component, OnInit } from '@angular/core';
import {AllusersService} from "../../controller/service/allusers.service";
import {Router} from "@angular/router";
import {User} from "../../controller/model/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: any;
  user: User = new User();


  constructor(private router: Router, private allusersService:AllusersService) { }

  ngOnInit() {}



  home() {
    this.router.navigateByUrl('/contact');
  }

  onLogin():boolean{
    this.allusersService.loginUser(this.user).subscribe((x: any) => {
      if(x===1){

      }else{

      }
    })
    return true;
  }
}
