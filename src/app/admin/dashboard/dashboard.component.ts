import {Component, OnInit} from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {AdminService} from "../../controller/service/admin.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private adminservice: AdminService) {
  }

  liste_montant_number: number [] = [];
  nbrusers: number;

  number: number;
  date_actuelle: Date = new Date();
  budget_annuel: number;
  budget_consommer: number;
    budget_rest : number;
    list_montant_mois : number[]= [];

  ngOnInit() {


    this.adminservice.get_statistic_etablissement("ENSA", "FSSM", "ENCG", "FMP", "FLSH", "FSTG", "FSJES", "FLAM", "ENS", "FP Safi", "ENSA Safi", "EST Safi", "EST Essaouira","FSJESK","FLAM","ESTK").subscribe((Liste_montants_string) => {
      Liste_montants_string.forEach(elem => {
        if (elem != null) {
          this.number = +elem;
          this.liste_montant_number.push(this.number);
        } else {
          this.number = 0;
          this.liste_montant_number.push(this.number);
        }

      })
      this.graphbar(this.liste_montant_number);
    })


    this.adminservice.get_statistic_graph_mois("JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER").subscribe((Liste_montants_mois_string) => {

      Liste_montants_mois_string.forEach(elem => {
        if (elem != null) {
          this.number = +elem;
          this.list_montant_mois.push(this.number);
        } else {
          this.number = 0;
          this.list_montant_mois.push(this.number);
        }

      })
      this.graphmois(this.list_montant_mois);
    })


    this.adminservice.countusers().subscribe((elem) => {
      this.nbrusers = elem;
    })

    this.adminservice.get_budget_annuelle_object(this.date_actuelle.getFullYear()).subscribe((elem) => {
      this.budget_annuel = elem.montant;
      this.adminservice.get_budget_comsommer(this.date_actuelle.getFullYear()).subscribe((element) => {
        this.budget_consommer = element;

        this.budget_rest=this.budget_annuel - this.budget_consommer;
      })

    })



  }
  graphmois(montant_mois: number []){

    var myLineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"," August","September","October","November"," December"],
        datasets: [{
          label: "Les dépences monsuel (DH) ",
          data: montant_mois,

          borderWidth: 2
        },

        ]
      },
      options: {
        responsive: true
      }
    });
  }


  graphbar(numeros: number[]) {

    var myChart = new Chart('myChart', {

      type: 'bar',
      data: {

        labels: ["ENSA", "FSSM", "ENCG", "FMP", "FLSH", "FSTG", "FSJES", "FLAM", "ENS", "FP Safi", "ENSA Safi", "EST Safi", "EST Essaouira","FSJESK","FLAM","ESTK"],
        datasets: [
          {

            label: 'Les montants par etablissement (DH) ',
            data: numeros,
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
