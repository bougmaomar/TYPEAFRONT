import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadre } from 'src/app/controller/model/cadre.model';
import { documents } from 'src/app/controller/model/documents.model';
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
  documents: documents;
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
    this.documents = new documents();
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
    this.adminService.readDocsMStage(this.id).subscribe((datadocs) => {
      this.documents = datadocs;
      if (this.documents.filecin === undefined) {
        (<HTMLInputElement>document.getElementById('cinbtn')).disabled = true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.filecin.name;
      }
      if (this.documents.fileA === undefined) {
        (<HTMLInputElement>document.getElementById('document1btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileA.name;
      }
      if (this.documents.fileB === undefined) {
        (<HTMLInputElement>document.getElementById('document2btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileB.name;
      }
      if (this.documents.fileC === undefined) {
        (<HTMLInputElement>document.getElementById('document3btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileC.name;
      }
      if (this.documents.fileD === undefined) {
        (<HTMLInputElement>document.getElementById('document4btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileD.name;
      }
      if (this.documents.fileE === undefined) {
        (<HTMLInputElement>document.getElementById('document5btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileE.name;
      }
      if (this.documents.fileF === undefined) {
        (<HTMLInputElement>document.getElementById('document6btn')).disabled =
          true;
      } else {
        (<HTMLInputElement>document.getElementById('cinbtn')).textContent =
          this.documents.fileF.name;
      }
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
          window.open(data);
        }
      });
  }

  openFile1() {
    window.open(this.documents.filecin);
  }
  openFile2() {
    window.open(this.documents.fileA);
  }
  openFile3() {
    window.open(this.documents.fileB);
  }
  openFile4() {
    window.open(this.documents.fileC);
  }
  openFile5() {
    window.open(this.documents.fileD);
  }
  openFile6() {
    window.open(this.documents.fileE);
  }
  openFile7() {
    window.open(this.documents.fileF);
  }

  sendMail() {
    this.dialog.open(MailFormComponent, {
      data: {
        email: this.user.email,
      },
    });
  }
}
