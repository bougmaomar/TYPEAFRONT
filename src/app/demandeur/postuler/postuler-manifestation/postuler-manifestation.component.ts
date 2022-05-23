import { Component, OnInit } from '@angular/core';

import { Manifestation } from 'src/app/controller/model/manifestation.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { UserService } from 'src/app/controller/service/user.service';
import Swal from 'sweetalert2';
import { documents } from '../../../controller/model/documents.model';

@Component({
  selector: 'app-postuler-manifestation',
  templateUrl: './postuler-manifestation.component.html',
  styleUrls: ['./postuler-manifestation.component.css'],
})
export class PostulerManifestationComponent implements OnInit {
  selectedFile = {} as HTMLInputElement;
  selectedFileA = {} as HTMLInputElement;
  selectedFileB = {} as HTMLInputElement;
  selectedFileC = {} as HTMLInputElement;
  selectedFileD = {} as HTMLInputElement;
  selectedFileE = {} as HTMLInputElement;

  FileCIN: boolean = false;
  FileA: boolean = false;
  FileB: boolean = false;
  FileC: boolean = false;
  FileD: boolean = false;
  FileE: boolean = false;

  manif: Manifestation = new Manifestation();
  soutien: Soutien = new Soutien();
  documents: documents = new documents();
  id: number;
  erreur: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.FileCIN == true ||
      this.FileA == true ||
      this.FileB == true ||
      this.FileC == true ||
      this.FileD == true ||
      this.FileE == true
    ) {
      this.userService
        .addAllManif(this.manif, this.soutien)
        .subscribe((x: any) => {
          if (x == '-1') {
            Swal.fire(
              'Ajout de manifestation',
              'Un ou plusieurs champs sont invalide',
              'error'
            );
          } else {
            this.id = x;
            this.userService
              .addFilesManif(x, this.documents)
              .subscribe((data) => {
                (<HTMLInputElement>(
                  document.getElementById('impbtnM')
                )).disabled = false;
                Swal.fire(
                  'Ajout de mission',
                  'Ajout est fait avec success',
                  'success'
                );
              });
            this.id = x;
          }
        });
    } else {
      Swal.fire(
        'Ajout de mission',
        'Veuillez remplire tous les fichier demander',
        'error'
      );
    }
  }

  onFileSelected(event: Event) {
    let selectedFile = (<HTMLInputElement>event.target).files![0];
    this.documents.filecin = selectedFile;
    document.getElementById('cin').textContent =
      selectedFile.name.toUpperCase();
    document.getElementById('cin').style.color = 'red';
    this.FileCIN = true;
  }

  onFileSelectedA(event: Event) {
    let selectedFileA = (<HTMLInputElement>event.target).files![0];
    this.documents.fileA = selectedFileA;
    document.getElementById('doc1').textContent =
      selectedFileA.name.toUpperCase();
    document.getElementById('doc1').style.color = 'red';
    this.FileA = true;
  }

  onFileSelectedB(event: Event) {
    let selectedFileB = (<HTMLInputElement>event.target).files![0];
    this.documents.fileB = selectedFileB;
    document.getElementById('doc2').textContent =
      selectedFileB.name.toUpperCase();
    document.getElementById('doc2').style.color = 'red';
    this.FileB = true;
  }

  onFileSelectedC(event: Event) {
    let selectedFileC = (<HTMLInputElement>event.target).files![0];
    this.documents.fileC = selectedFileC;
    document.getElementById('doc3').textContent =
      selectedFileC.name.toUpperCase();
    document.getElementById('doc3').style.color = 'red';
    this.FileC = true;
  }

  onFileSelectedD(event: Event) {
    let selectedFileD = (<HTMLInputElement>event.target).files![0];
    this.documents.fileD = selectedFileD;
    document.getElementById('doc4').textContent =
      selectedFileD.name.toUpperCase();
    document.getElementById('doc4').style.color = 'red';
    this.FileD = true;
  }

  onFileSelectedE(event: Event) {
    let selectedFileE = (<HTMLInputElement>event.target).files![0];
    this.documents.fileE = selectedFileE;
    document.getElementById('doc5').textContent =
      selectedFileE.name.toUpperCase();
    document.getElementById('doc5').style.color = 'red';
    this.FileE = true;
  }

  onSubmitt() {
    this.userService.generateReport(this.id).subscribe((data) => {
      if (data === 'erreur') {
        Swal.fire(
          'Inmpression',
          'L impression a fail veuillez verifier que vous avez sauvegarder votre demande',
          'error'
        );
      } else {
        (<HTMLInputElement>document.getElementById('impbtnM')).disabled = false;
        Swal.fire(
          'Inmpression',
          'L impression a ete fait avec success',
          'success'
        );
      }
    });
  }
}
