import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLogged: boolean = false;
  user: User = new User();

  constructor(
    private allusersService: AllusersService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onSubmit() {
    this.allusersService.loginUser(this.user).subscribe((x: any) => {
      if (x == 1) {
        this.router.navigate(['/choisir-postuler']);
        this.isLogged = true;
        localStorage.setItem('isLogged', `${this.isLogged}`);
      } else {
      }
    });
  }
}
