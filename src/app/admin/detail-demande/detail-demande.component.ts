import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { MissionStage } from 'src/app/controller/model/mission-stage.model';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';

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
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mStage = new MissionStage();
    this.user = new User();
    this.adminService.getMissionStageById(this.id).subscribe((stage) => {
      this.mStage = stage;
    });
    this.adminService.getUserByMstage(this.id).subscribe((userdata) => {
      this.user = userdata;
    });
    this.adminService.getUserDonne(this.id).subscribe((donnedata) => {
      this.donnePro = donnedata;
    });
  }
}
