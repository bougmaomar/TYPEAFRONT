import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { UserService } from 'src/app/controller/service/user.service';
import { AdminService } from 'src/app/controller/service/admin.service';
import Swal from 'sweetalert2';
import {Etablissement} from "../../../controller/model/Etablissement.model";

@Component({
  selector: 'app-information-sur-demandeur',
  templateUrl: './information-sur-demandeur.component.html',
  styleUrls: ['./information-sur-demandeur.component.css'],
})
export class InformationSurDemandeurComponent implements OnInit {
  donne: DonneePro = new DonneePro();
  donneData: DonneePro = new DonneePro();
  etabData: Etablissement= new Etablissement();
  etab : Etablissement= new Etablissement();
  constructor(
    private userService: UserService,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userService.getThisUserId().subscribe((theid: number) => {
      this.adminService.getdonnepro(theid).subscribe((incoming) => {
        this.donneData = incoming;
        console.log(incoming.etablissement);
        console.log(incoming.etablissement.id);
       this.adminService.getetablissement(incoming.etablissement.id).subscribe((inc) =>{
         console.log(inc);
         this.etabData=inc;
       })
      });
    });

  }

  onSubmit() {
    this.donne.etablissement=this.etab;
    this.userService.saveDonnesPro(this.donne).subscribe((data: any) => {
      console.log(data);
      if (data == -1) {
        Swal.fire(
          'Mise a jour données',
          'Vos données professionnels ont ete mise a jour',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/choisir-postuler']);
          }
        });
      } else if (data == 1) {
        Swal.fire(
          'Ajout données',
          'Vos données professionnels ont ete ajouter',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/choisir-postuler']);
          }
        });
      } else {
        Swal.fire(
          'Ajout données',
          'Veuillez verfiez que un ou plusieur champs sont pas vide',
          'error'
        );
      }
    });
  }
}
