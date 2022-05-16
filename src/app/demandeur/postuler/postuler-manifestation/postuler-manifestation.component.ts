import {Component, OnInit} from '@angular/core';
import {Manifestation} from "../../../controller/model/manifestation.model";
import {UserService} from "../../../controller/service/user.service";
import {Soutien} from "../../../controller/model/soutien.model";

@Component({
  selector: 'app-postuler-manifestation',
  templateUrl: './postuler-manifestation.component.html',
  styleUrls: ['./postuler-manifestation.component.css'],
})
export class PostulerManifestationComponent implements OnInit {
  set date1(value: Date) {
    this._date1 = value;
  }
  set date2(value: Date) {
    this._date2 = value;
  }
  set date3(value: Date) {
    this._date3 = value;
  }
  set date4(value: Date) {
    this._date4 = value;
  }
  manifestation : Manifestation = new Manifestation();

   soutien : Soutien= new Soutien();
  constructor( private  userservice : UserService) {

  }
  private _date4: Date | undefined;
  private _date3: Date | undefined;
  private _date2: Date | undefined;
  private _date1: Date | undefined;

  ngOnInit() {

  }
onsubmitt(){

}

  onsubmit() {
    this.userservice.addManif(this.manifestation).subscribe(data =>{
        if (data > 0) {
          this.userservice.addSoutien(this.soutien,true,this.manifestation.id,null).subscribe(data =>{
            console.log(data);})
        }
      }, error => {
        console.log('error');
      }
    );






  }
}
