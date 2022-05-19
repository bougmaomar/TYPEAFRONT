import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { AdminService } from 'src/app/controller/service/admin.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css'],
})
export class DemandesComponent implements OnInit {
  mStages: MissionStage[];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getMStages();
  }

  private getMStages() {
    this.adminService.getAllMStages().subscribe((data) => {
      this.mStages = data;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/detail-demande-Stage', id]);
  }

  accepted() {}

  refused(id: number) {
    this.adminService.RefuseMStage(id).subscribe((data) => {});
  }
}
