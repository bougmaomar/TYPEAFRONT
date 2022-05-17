import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Cadre } from 'src/app/controller/model/cadre.model';

import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { UserService } from 'src/app/controller/service/user.service';
import {documents} from "../../../controller/model/documents.model";

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
        this.idm=x;
        this.userService.addFiles(x, this.documents).subscribe((data) => {
          console.log(data);
        });
      });
  }

  onFileSelected(event: Event) {
    let selectedFile = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFile);
    this.documents.filecin = selectedFile;
  }

  onFileSelectedA(event: Event) {
    let selectedFileA = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFileA);
    this.documents.fileA = selectedFileA;
  }

  onFileSelectedB(event: Event) {
    let selectedFileB = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFileB);
    this.documents.fileB = selectedFileB;
  }

  onFileSelectedC(event: Event) {
    let selectedFileC = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFileC);
    this.documents.fileC = selectedFileC;
  }

  onFileSelectedD(event: Event) {
    let selectedFileD = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFileD);
    this.documents.fileD = selectedFileD;
  }

  onFileSelectedE(event: Event) {
    let selectedFileE = (<HTMLInputElement>event.target).files![0];
    console.log(selectedFileE);
    this.documents.fileE = selectedFileE;
  }
  onSubmitt(){
    this.userService.exportReportMission(this.idm).subscribe((data) => {
      console.log(data);
    });

  }
}
