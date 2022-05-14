import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postuler-mission',
  templateUrl: './postuler-mission.component.html',
  styleUrls: ['./postuler-mission.component.css']
})
export class PostulerMissionComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  private _date4: Date | undefined;
  private _date3: Date | undefined;
  private _date2: Date | undefined;
  private _date1: Date | undefined;
}
