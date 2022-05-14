import {Component, OnInit} from '@angular/core';

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

  constructor() {

  }
  private _date4: Date | undefined;
  private _date3: Date | undefined;
  private _date2: Date | undefined;
  private _date1: Date | undefined;

  ngOnInit() {

  }


}
