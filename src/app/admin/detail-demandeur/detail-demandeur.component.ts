import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AdminService } from 'src/app/controller/service/admin.service';

@Component({
  selector: 'app-detail-demandeur',
  templateUrl: './detail-demandeur.component.html',
  styleUrls: ['./detail-demandeur.component.css'],
})
export class DetailDemandeurComponent implements OnInit {
  id: number;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.adminService.getUserById(this.id).subscribe((data) => {
      this.user = data;
    });
  }
}
