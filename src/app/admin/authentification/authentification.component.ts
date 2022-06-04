import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/controller/model/user.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
})
export class AuthentificationComponent implements OnInit {
  isLogged: boolean = false;
  isAdmin: boolean = false;
  user: User = new User();
  erreur: string;

  constructor(
    private alluserService: AllusersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.alluserService.loginUser(this.user).subscribe((x: any) => {
      if (x == 1) {
        this.alluserService
          .isAdmin(this.user.email)
          .subscribe((data: boolean) => {
            this.isAdmin = data;
            if (this.isAdmin == true) {
              this.isLogged = true;
              sessionStorage.setItem('isLogged', `${this.isLogged}`);
              sessionStorage.setItem('isAdmin', `${this.isAdmin}`);
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.erreur =
                'Vous etes pas un admin veuillez se connecter sur interface utilisateur';
            }
          });
      } else if (x == -3 || x == -1) {
        this.erreur = 'Email ou mot de passe sont invalide';
      } else {
        this.erreur = 'Email ou mot de passe sont incorrect';
      }
    });
  }
}
