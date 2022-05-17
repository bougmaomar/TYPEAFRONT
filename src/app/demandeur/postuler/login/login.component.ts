import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { VarService } from 'src/app/controller/service/var.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() isLogged: boolean = false;
  user: User = new User();
  constructor(
    private allusersService: AllusersService,
    private router: Router,
    private varService: VarService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.allusersService.loginUser(this.user).subscribe((x: any) => {
      if (x == 1) {
        this.varService.setIsLogged(true);
        this.router.navigate(['/choisir-postuler']);
      } else {
        this.varService.setIsLogged(false);
      }
    });
  }
}
