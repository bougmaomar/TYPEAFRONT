import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../controller/service/user.service";
import {User} from "../../../controller/model/user.model";
import {DonneePro} from "../../../controller/model/donnee-pro.model";

@Component({
  selector: 'app-information-sur-demandeur',
  templateUrl: './information-sur-demandeur.component.html',
  styleUrls: ['./information-sur-demandeur.component.css']
})
export class InformationSurDemandeurComponent implements OnInit {
  donnepro: DonneePro = new DonneePro();
  Email : string;
  constructor( private  userservice : UserService) {}
onsubmit(){
  this.userservice.saveDonnesPro(this.donnepro,this.Email).subscribe(data =>{
  console.log(data);
  })
}
  ngOnInit(): void {
  }

}
