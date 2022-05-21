import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MailMessage } from 'src/app/controller/model/mailmessages.model';
import { AdminService } from 'src/app/controller/service/admin.service';
import Swal from 'sweetalert2';
import { DialogData } from './dialogData.service';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css'],
})
export class MailFormComponent implements OnInit {
  path: string;
  body: string =
    'Mme Hanane NEKOUA\nDIVISION RECHERCHE SCIENTIFIQUE\nPRÉSIDENCE UNIVERSITÉ CADI AYYAD\nBP 511, Av Moulay Abdellah, Marrakech\nTél : 05 24 43 48 13/14\nFax : 05 24 43 44 94\nCourrier : ha.nekoua@uca.ma';
  mssgsMail: MailMessage = new MailMessage();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {

    this.mssgsMail.toEmail = this.data.email;
    this.mssgsMail.body = this.body;
    if (this.data.type) {
      this.adminService.getLettreMission(this.data.id).subscribe((data) => {
        console.log(data);
      }, error => {
        console.log(error.message)
      });


    } else {
      this.adminService.getLettreManif(this.data.id).subscribe((pathdata) => {
        this.path = pathdata;
      });
    }

  }

  Valider() {
    this.adminService.SendMail(this.mssgsMail).subscribe((ret: any) => {
      if (ret == 1) {
        Swal.fire(
          'Email envoyer',
          'Email d acceptation de la demande Mission Stage a ete envoyer avec succes',
          'success'
        );
      } else {
        Swal.fire(
          'Erreur',
          'Email d acceptation ete pas envoyer veuillez verifier les champs',
          'error'
        );
      }
    });
  }
}
