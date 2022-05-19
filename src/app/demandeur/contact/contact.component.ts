import { Component, OnInit } from '@angular/core';
import { messages } from 'src/app/controller/model/messages.model';
import { AllusersService } from 'src/app/controller/service/allusers.service';
import { UserService } from 'src/app/controller/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  mssg: messages = new messages();

  constructor(private alluserService: AllusersService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.alluserService.contactAdmin(this.mssg).subscribe((data: any) => {
      if (data == 1) {
        Swal.fire(
          'Envoi Message',
          'Message a été envoyer avec success',
          'success'
        );
      } else {
        Swal.fire(
          'Envoi Message',
          'Envoi du message a été interompu veuillez verifier que un ou plusieurs champs sont pas vide',
          'error'
        );
      }
    });
  }
}
