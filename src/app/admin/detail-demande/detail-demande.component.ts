import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadre } from 'src/app/controller/model/cadre.model';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { NewMontant } from 'src/app/controller/model/montants.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import Swal from 'sweetalert2';
import { MailFormComponent } from '../mail-form/mail-form.component';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css'],
})
export class DetailDemandeComponent implements OnInit {
  id: number;
  mStage: MissionStage;
  user: User;
  donnePro: DonneePro;
  cadre: Cadre;
  soutien: Soutien;
  newMont: NewMontant;
  ismStage: boolean = true;
  path: string;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mStage = new MissionStage();
    this.user = new User();
    this.cadre = new Cadre();
    this.soutien = new Soutien();
    this.newMont = new NewMontant();
    this.adminService.getMissionStageById(this.id).subscribe((stage) => {
      this.mStage = stage;
    });
    this.adminService.getUserByMstage(this.id).subscribe((userdata) => {
      this.user = userdata;
    });
    this.adminService.getUserDonne(this.id).subscribe((donnedata) => {
      this.donnePro = donnedata;
    });
    this.adminService.getCadreByMStage(this.id).subscribe((cadredata) => {
      this.cadre = cadredata;
    });
    this.adminService.getSoutienByMStage(this.id).subscribe((soutiendata) => {
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
        this.adminService.RefuseMStage(this.id).subscribe(() => {});
        Swal.fire('Refuser', 'La demande a ete refuser ', 'success').then(
          () => {
            this.router.navigate(['/demandes-Manif']);
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
        type: this.ismStage,
      },
    });
  }

  onSave() {
    this.adminService
      .ajoutNewMontantMS(this.id, this.newMont)
      .subscribe((data) => {
        if (data == 1) {
          Swal.fire(
            'Montants Sauvegarde',
            'Montants sauvegarder avec success',
            'success'
          );
        } else {
          Swal.fire(
            'Montants Sauvegarde',
            'Montats sont deja sauvegarder',
            'error'
          );
        }
      });
  }

  onclick() {
    this.adminService
      .exportNvmontantmission(this.id)
      .subscribe((data: string) => {
        if (data == 'erreur') {
          Swal.fire(
            'Impression',
            'Impression Erreur veuillez ressayer',
            'error'
          );
        } else {
          Swal.fire(
            'Impression',
            'Impression effectuée avec success',
            'success'
          );
        }
      });
  }
}
