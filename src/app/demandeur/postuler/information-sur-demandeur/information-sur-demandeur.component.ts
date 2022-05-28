import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { UserService } from 'src/app/controller/service/user.service';
import { AdminService } from 'src/app/controller/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-information-sur-demandeur',
  templateUrl: './information-sur-demandeur.component.html',
  styleUrls: ['./information-sur-demandeur.component.css'],
})
export class InformationSurDemandeurComponent implements OnInit {
  donne: DonneePro = new DonneePro();
  donneData: DonneePro = new DonneePro();
  constructor(
    private userService: UserService,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userService.getThisUserId().subscribe((theid: number) => {
      this.adminService.getdonnepro(theid).subscribe((incoming) => {
        this.donneData = incoming;
      });
    });
  }

  onSubmit() {
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
        this.userService.saveDonnesPro(this.donne).subscribe((updated: any) => {
          if (updated == 1) {
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
              'Vos données professionnels ont ete pas ajouter',
              'error'
            );
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
