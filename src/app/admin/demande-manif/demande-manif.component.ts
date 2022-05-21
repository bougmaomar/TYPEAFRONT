import { Component, OnInit } from '@angular/core';
import { MissionStage } from '../../controller/model/mission-stage.model';
import { User } from '../../controller/model/user.model';
import { AdminService } from '../../controller/service/admin.service';
import { Router } from '@angular/router';
import { Manifestation } from '../../controller/model/manifestation.model';
import { State } from 'src/app/controller/enums/state.service';

@Component({
  selector: 'app-demande-manif',
  templateUrl: './demande-manif.component.html',
  styleUrls: ['./demande-manif.component.css'],
})
export class DemandeManifComponent implements OnInit {
  manifs: Manifestation[];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getmanifs();
  }

  private getmanifs() {
    this.adminService.findAllManifsByState(State.IDLE).subscribe((data) => {
      this.manifs = data;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/detail-demande-Manif', id]);
  }
}
