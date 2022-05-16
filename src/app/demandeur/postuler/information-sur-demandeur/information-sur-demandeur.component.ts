import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { UserService } from 'src/app/controller/service/user.service';

@Component({
  selector: 'app-information-sur-demandeur',
  templateUrl: './information-sur-demandeur.component.html',
  styleUrls: ['./information-sur-demandeur.component.css']
})
export class InformationSurDemandeurComponent implements OnInit {

  donne: DonneePro = new DonneePro();
  constructor(private userService: UserService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.saveDonnesPro(this.donne).subscribe(data =>{
      console.log(data);
    })
  }

  onSubmit(){
    console.log(this.donne);
    this.addUser();
  }

}
