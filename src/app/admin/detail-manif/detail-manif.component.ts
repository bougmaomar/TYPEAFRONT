import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { Manifestation } from 'src/app/controller/model/manifestation.model';
import { NewMontant } from 'src/app/controller/model/montants.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';
import Swal from 'sweetalert2';
import { MailFormComponent } from '../mail-form/mail-form.component';

@Component({
  selector: 'app-detail-manif',
  templateUrl: './detail-manif.component.html',
  styleUrls: ['./detail-manif.component.css'],
})
export class DetailManifComponent implements OnInit {
  id: number;
  manif: Manifestation;
  user: User;
  donnePro: DonneePro;
  soutien: Soutien;
  newMont: NewMontant;
  dialog: any;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.manif = new Manifestation();
    this.user = new User();
    this.soutien = new Soutien();
    this.newMont = new NewMontant();
    this.adminService.getManifestationById(this.id).subscribe((manifdonne) => {
      this.manif = manifdonne;
    });
    this.adminService.getUserByManifId(this.id).subscribe((userdata) => {
      this.user = userdata;
    });
    this.adminService.getUserDonneByManifId(this.id).subscribe((donnedata) => {
      this.donnePro = donnedata;
    });
    this.adminService.getSoutienByManifId(this.id).subscribe((soutiendata) => {
      this.soutien = soutiendata;
    });
  }

  refuseMStage() {
    Swal.fire({
      title: 'Refuser',
      text: 'Etes vous sur de rejeter cette demande !?',
      icon: 'warning',
      confirmButtonText: 'Oui',
      showCancelButton: true,
      cancelButtonText: 'Non',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.manifRefused(this.id).subscribe(() => {});
        Swal.fire('Refuser', 'La demande a ete refuser ', 'success').then(
          () => {
            this.router.navigate(['/demandes-Stage']);
          }
        );
      } else {
        Swal.fire(
          'Annuler',
          'La refusation de demande a ete annuler',
          'success'
        );
      }
    });
  }

  acceptMStage() {
    this.dialog.open(MailFormComponent, {
      data: {
        id: this.id,
        email: this.user.email,
        type: this.manif,
      },
    });
  }

  onSave() {
    this.adminService
      .ajoutNewMontantM(this.id, this.newMont)
      .subscribe((data) => {
        (document.getElementById('actions') as HTMLInputElement).disabled =
          false;
        (document.getElementById('actions2') as HTMLInputElement).disabled =
          false;
        Swal.fire(
          'Montants Sauvegarde',
          'Montants sauvegarder avec success',
          'success'
        );
      });
  }


  onclick()
  {
    this.adminService.exportNvmontantmanif(this.id).subscribe((data) => {
      console.log(data);
    });
  }



}
