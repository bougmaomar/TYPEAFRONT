import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import {AdminService} from "../../controller/service/admin.service";
import {of} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private adminservice: AdminService) {
  }

 NUM : number [] =[];

nu: number;
  ngOnInit() {


    this.adminservice.get_statistic_etablissement("ENSA","FSSM","ENCG","FMP","FLSH","FST","FSJES","FLAM","ENS","FP Safi","ENSA Safi","EST Safi","EST Essaouira").subscribe((num) => {
num.forEach(elem => {
  if( elem != null){
    this.nu = +elem  ;
    this.NUM.push(this.nu);
  }
  else{
    this.nu = 0;
    this.NUM.push(this.nu);
  }

})


      this.ayoub(this.NUM);



    })



  }

  ayoub (numero : number[]){

    var myChart = new Chart('myChart', {

      type: 'bar',
      data: {

        labels: ["ENSA","FSSM","ENCG","FMP","FLSH","FST","FSJES","FLAM","ENS","FP Safi","ENSA Safi","EST Safi","EST Essaouira"],
        datasets: [
          {

            label: '# of Votes',
            data: numero,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });


  }


}
