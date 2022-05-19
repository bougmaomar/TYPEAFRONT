import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';
import {DonneePro} from "../../controller/model/donnee-pro.model";
import {UserService} from "../../controller/service/user.service";

@Component({
  selector: 'app-detail-demandeur',
  templateUrl: './detail-demandeur.component.html',
  styleUrls: ['./detail-demandeur.component.css'],
})
export class DetailDemandeurComponent implements OnInit {
  id: number;
  user: User;
  donnepro : DonneePro ;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private userservice : UserService
  ) {}

  ngOnInit(): void {

     this.route.params.subscribe((params : Params) => {
      this.id= params['id'];
    })
    this.user = new User();
    this.adminService.getUserById(this.id).subscribe((data) => {
      this.user = data;


    });
   this.userservice.getdonnepro(this.user.id).subscribe((dat )=> {

    });

  }
}
