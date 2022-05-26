import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { documents } from 'src/app/controller/model/documents.model';
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
  documents: documents;
  ismStage: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.manif = new Manifestation();
    this.user = new User();
    this.soutien = new Soutien();
    this.newMont = new NewMontant();
    this.documents = new documents();
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
    this.adminService.readDocsManif(this.id).subscribe((datadocs) => {
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
        type: this.ismStage,
      },
    });
  }

  onSave() {
    this.adminService
      .ajoutNewMontantM(this.id, this.newMont)
      .subscribe((data: number) => {
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
      .exportNvmontantmanif(this.id)
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
