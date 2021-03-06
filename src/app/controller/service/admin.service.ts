import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../enums/state.service';
import { Cadre } from '../model/cadre.model';
import { documents } from '../model/documents.model';
import { DonneePro } from '../model/donnee-pro.model';
import { MailMessage } from '../model/mailmessages.model';
import { Manifestation } from '../model/manifestation.model';
import { messages } from '../model/messages.model';
import { MissionStage } from '../model/mission-stage.model';
import { NewMontant } from '../model/montants.model';
import { Soutien } from '../model/soutien.model';
import { User } from '../model/user.model';
import { Etablissement } from '../model/Etablissement.model';
import { Budget } from '../model/Budget.model';
import { Montant_par_labo } from '../model/Montant_par_labo.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8000/admin';

  constructor(private httpClient: HttpClient) {}

  findUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl + '/Users'}`);
  }

  findByNom(name: string): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl + '/username/'} + name`);
  }

  findMissions(): Observable<MissionStage[]> {
    return this.httpClient.get<MissionStage[]>(`${this.baseUrl + '/missions'}`);
  }

  findManifestation(): Observable<Manifestation[]> {
    return this.httpClient.get<Manifestation[]>(
      `${this.baseUrl + '/missions'}`
    );
  }

  getAllMStages(): Observable<MissionStage[]> {
    return this.httpClient.get<MissionStage[]>(`${this.baseUrl + '/missions'}`);
  }
  getAllManifs(): Observable<Manifestation[]> {
    return this.httpClient.get<Manifestation[]>(
      `${this.baseUrl + '/manifestations'}`
    );
  }

  getMissionStageById(mStageId: number): Observable<MissionStage> {
    return this.httpClient.get<MissionStage>(
      `${this.baseUrl + '/getmstage/' + mStageId}`
    );
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      `${this.baseUrl + '/getuserbyid/' + userId}`
    );
  }

  getAllMessages(): Observable<messages[]> {
    return this.httpClient.get<messages[]>(`${this.baseUrl + '/messages'}`);
  }

  getUserByMstage(mStageId: number): Observable<User> {
    return this.httpClient.get<User>(
      `${this.baseUrl + '/theuser/' + mStageId}`
    );
  }

  getUserDonne(mStageId: number): Observable<DonneePro> {
    return this.httpClient.get<DonneePro>(
      `${this.baseUrl + '/userdonne/' + mStageId}`
    );
  }

  RefuseMStage(mStageId: number): Observable<number> {
    return this.httpClient.get<number>(
      `${this.baseUrl + '/refusestage/' + mStageId}`
    );
  }

  SendMail(mssgsMail: MailMessage): Observable<MailMessage> {
    return this.httpClient.post<MailMessage>(
      `${this.baseUrl + '/sendmail'}`,
      mssgsMail
    );
  }

  getCadreByMStage(mStageId: number): Observable<Cadre> {
    return this.httpClient.get<Cadre>(
      `${this.baseUrl + '/getcadrebystage/' + mStageId}`
    );
  }

  getSoutienByMStage(mStageId: number): Observable<Soutien> {
    return this.httpClient.get<Soutien>(
      `${this.baseUrl + '/getsoutienbystage/' + mStageId}`
    );
  }

  getManifestationById(manifId: number): Observable<Manifestation> {
    return this.httpClient.get<Manifestation>(
      `${this.baseUrl + '/getmanifbyid/' + manifId}`
    );
  }

  getUserByManifId(manifId: number): Observable<User> {
    return this.httpClient.get<User>(
      `${this.baseUrl + '/getuserbymanif/' + manifId}`
    );
  }

  getUserDonneByManifId(manifId: number): Observable<DonneePro> {
    return this.httpClient.get<DonneePro>(
      `${this.baseUrl + '/getdonnebymanif/' + manifId}`
    );
  }

  getSoutienByManifId(manifId: number): Observable<Soutien> {
    return this.httpClient.get<Soutien>(
      `${this.baseUrl + '/getsoutienbymanif/' + manifId}`
    );
  }

  getLettreMission(missionId: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseUrl + '/raportlettremission/' + missionId}`,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  getLettreManif(manifId: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseUrl + '/raportlettremanif/' + manifId}`,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  ajoutNewMontantMS(mStageId: number, nvMnt: NewMontant): Observable<number> {
    return this.httpClient.post<number>(
      `${this.baseUrl + '/addnewmontantMS/' + mStageId}`,
      nvMnt,
      {
        withCredentials: true,
      }
    );
  }

  ajoutNewMontantM(missionId: number, nvMnt: NewMontant): Observable<number> {
    return this.httpClient.post<number>(
      `${this.baseUrl + '/addnewmontant/' + missionId}`,
      nvMnt,
      {
        withCredentials: true,
      }
    );
  }
  save_budget(budget: Budget): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + '/save_budget'}`, budget);
  }

  manifRefused(mStageId: number): Observable<number> {
    return this.httpClient.get<number>(
      `${this.baseUrl + '/refusemanif/' + mStageId}`
    );
  }

  getdonnepro(id: number): Observable<DonneePro> {
    return this.httpClient.get<DonneePro>(
      `${this.baseUrl + '/getdonne/' + id}`
    );
  }
  countusers(): Observable<number> {
    return this.httpClient.get<number>(`${this.baseUrl + '/countusers'}`);
  }

  exportNvmontantmanif(id: number): Observable<Object> {
    return this.httpClient.get(
      `${this.baseUrl + '/raportNVmontantmanif/' + id}`,
      {
        withCredentials: true,
        responseType: 'text' as 'json',
      }
    );
  }

  exportNvmontantmission(id: number): Observable<Object> {
    return this.httpClient.get(
      `${this.baseUrl + '/raportNvmontantmis/' + id}`,
      {
        withCredentials: true,
        responseType: 'text' as 'json',
      }
    );
  }

  findAllStagesByState(state: State): Observable<MissionStage[]> {
    return this.httpClient.get<MissionStage[]>(
      `${this.baseUrl + '/findallmstages/' + state}`
    );
  }

  findAllManifsByState(state: State): Observable<Manifestation[]> {
    return this.httpClient.get<Manifestation[]>(
      `${this.baseUrl + '/findallmanifs/' + state}`
    );
  }

  readDocsMStage(mStageId: number): Observable<documents> {
    return this.httpClient.get<documents>(
      `${this.baseUrl + '/viewdocs/' + mStageId}`
    );
  }

  readDocsManif(manifId: number): Observable<documents> {
    return this.httpClient.get<documents>(
      `${this.baseUrl + '/viewdocsmanif/' + manifId}`
    );
  }
  getetablissement(etabId: number): Observable<Etablissement> {
    return this.httpClient.get<Etablissement>(
      `${this.baseUrl + '/getetab/' + etabId}`
    );
  }
  get_statistic_etablissement(
    etab: string,
    e2: string,
    e3: string,
    e4: string,
    e5: string,
    e6: string,
    e7: string,
    e8: string,
    e9: string,
    e10: string,
    e11: string,
    e12: string,
    e13: string,
    e14: string,
    e15: string,
    e16: string
  ): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${
        this.baseUrl +
        '/statistic_graph_bar/' +
        etab +
        '/' +
        e2 +
        '/' +
        e3 +
        '/' +
        e4 +
        '/' +
        e5 +
        '/' +
        e6 +
        '/' +
        e7 +
        '/' +
        e8 +
        '/' +
        e9 +
        '/' +
        e10 +
        '/' +
        e11 +
        '/' +
        e12 +
        '/' +
        e13 +
        '/' +
        e14 +
        '/' +
        e15 +
        '/' +
        e16
      }`
    );
  }
  get_statistic_graph_mois(
    mois: string,
    e2: string,
    e3: string,
    e4: string,
    e5: string,
    e6: string,
    e7: string,
    e8: string,
    e9: string,
    e10: string,
    e11: string,
    e12: string
  ): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${
        this.baseUrl +
        '/statistic_graph_monsuel/' +
        mois +
        '/' +
        e2 +
        '/' +
        e3 +
        '/' +
        e4 +
        '/' +
        e5 +
        '/' +
        e6 +
        '/' +
        e7 +
        '/' +
        e8 +
        '/' +
        e9 +
        '/' +
        e10 +
        '/' +
        e11 +
        '/' +
        e12
      }`
    );
  }

  get_budget_annuelle_object(date: number): Observable<Budget> {
    return this.httpClient.get<Budget>(
      `${this.baseUrl + '/BudgetAnnuelle_object/' + date}`
    );
  }
  get_budget_comsommer(date: number): Observable<number> {
    return this.httpClient.get<number>(
      `${this.baseUrl + '/budget_consommer/' + date}`
    );
  }
  find_all_montant_par_labo(): Observable<Montant_par_labo[]> {
    return this.httpClient.get<Montant_par_labo[]>(
      `${this.baseUrl + '/getmontant_par_labo'}`
    );
  }

  findRapport(donneId: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.baseUrl + '/viewlastdoc/' + donneId}`
    );
  }
}
