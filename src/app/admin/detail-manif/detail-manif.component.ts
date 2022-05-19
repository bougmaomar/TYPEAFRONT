import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonneePro } from 'src/app/controller/model/donnee-pro.model';
import { Manifestation } from 'src/app/controller/model/manifestation.model';
import { Soutien } from 'src/app/controller/model/soutien.model';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';

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
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.manif = new Manifestation();
    this.user = new User();
    this.soutien = new Soutien();
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
  }
}
