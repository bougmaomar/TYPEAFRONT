import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Cadre } from 'src/app/controller/model/cadre.model';

import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { UserService } from 'src/app/controller/service/user.service';
import Swal from 'sweetalert2';
import { documents } from '../../../controller/model/documents.model';

@Component({
  selector: 'app-postuler-mission',
  templateUrl: './postuler-mission.component.html',
  styleUrls: ['./postuler-mission.component.css'],
})
export class PostulerMissionComponent implements OnInit {
  selectedFile = {} as HTMLInputElement;
  selectedFileA = {} as HTMLInputElement;
  selectedFileB = {} as HTMLInputElement;
  selectedFileC = {} as HTMLInputElement;
  selectedFileD = {} as HTMLInputElement;
  selectedFileE = {} as HTMLInputElement;

  mstage: MissionStage = new MissionStage();
  cadre: Cadre = new Cadre();
  soutien: Soutien = new Soutien();
  documents: documents = new documents();
  num: number;
  idm: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .addAll(this.mstage, this.cadre, this.soutien)
      .subscribe((x: any) => {
        if (x == '-1') {
          Swal.fire(
            'Ajout de mission',
            'Un ou plusieurs champs sont invalide',
            'error'
          );
        } else {
          this.idm = x;
          Swal.fire(
            'Ajout de mission',
            'Ajout est fait avec success',
            'success'
          );
          this.userService.addFiles(x, this.documents).subscribe((data) => {});
        }
      });
  }

  onFileSelected(event: Event) {
    let selectedFile = (<HTMLInputElement>event.target).files![0];
    this.documents.filecin = selectedFile;
    document.getElementById('cin').textContent =
      selectedFile.name.toUpperCase();
    document.getElementById('cin').style.color = 'red';
  }

  onFileSelectedA(event: Event) {
    let selectedFileA = (<HTMLInputElement>event.target).files![0];
    this.documents.fileA = selectedFileA;
    document.getElementById('doc1').textContent =
      selectedFileA.name.toUpperCase();
    document.getElementById('doc1').style.color = 'red';
  }

  onFileSelectedB(event: Event) {
    let selectedFileB = (<HTMLInputElement>event.target).files![0];
    this.documents.fileB = selectedFileB;
    document.getElementById('doc2').textContent =
      selectedFileB.name.toUpperCase();
    document.getElementById('doc2').style.color = 'red';
  }

  onFileSelectedC(event: Event) {
    let selectedFileC = (<HTMLInputElement>event.target).files![0];
    this.documents.fileC = selectedFileC;
    document.getElementById('doc3').textContent =
      selectedFileC.name.toUpperCase();
    document.getElementById('doc3').style.color = 'red';
  }

  onFileSelectedD(event: Event) {
    let selectedFileD = (<HTMLInputElement>event.target).files![0];
    this.documents.fileD = selectedFileD;
    document.getElementById('doc4').textContent =
      selectedFileD.name.toUpperCase();
    document.getElementById('doc4').style.color = 'red';
  }

  onFileSelectedE(event: Event) {
    let selectedFileE = (<HTMLInputElement>event.target).files![0];
    this.documents.fileE = selectedFileE;
    document.getElementById('doc5').textContent =
      selectedFileE.name.toUpperCase();
    document.getElementById('doc5').style.color = 'red';
  }
  onSubmitt() {
    this.userService.exportReportMission(this.idm).subscribe((data) => {
      console.log(data);
    });
  }
}
