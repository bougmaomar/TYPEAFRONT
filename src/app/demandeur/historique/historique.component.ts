import { Component, OnInit } from '@angular/core';
import { Manifestation } from 'src/app/controller/model/manifestation.model';
import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { UserService } from 'src/app/controller/service/user.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {
  manifestations: Manifestation[];
  missionStages: MissionStage[];
  isManif: boolean = false;
  isRefused: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getMStages();
  }

  private getMStages() {
    this.userService.getMyMissionStages().subscribe((data) => {
      this.missionStages = data;
    });
  }

  private getManifs() {
    this.userService.getMyManifestations().subscribe((data) => {
      this.manifestations = data;
    });
  }

  changeList() {
    if (this.isManif) {
      this.isManif = false;
      this.getMStages();
      document.getElementById('changebtn').textContent = '=> Manifestations <=';
    } else {
      this.isManif = true;
      this.getManifs();
      document.getElementById('changebtn').textContent = '=> MissionStages <=';
    }
  }
}
