import { Component, OnInit } from '@angular/core';

import { Manifestation } from 'src/app/controller/model/manifestation.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { UserService } from 'src/app/controller/service/user.service';
import {documents} from "../../../controller/model/documents.model";

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

  manif: Manifestation = new Manifestation();
  soutien: Soutien = new Soutien();
  documents: documents= new documents();
id: number;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .addAllManif(this.manif, this.soutien)
      .subscribe((x: any) => {
        this.id=x;
        this.userService.addFilesManif(x, this.documents).subscribe((data) => {
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
    this.userService.generateReport(this.id).subscribe((data) => {
      console.log(data);
    });

  }


}
