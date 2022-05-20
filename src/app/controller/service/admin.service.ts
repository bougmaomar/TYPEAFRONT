import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadre } from '../model/cadre.model';
import { DonneePro } from '../model/donnee-pro.model';
import { MailMessage } from '../model/mailmessages.model';
import { Manifestation } from '../model/manifestation.model';
import { messages } from '../model/messages.model';
import { MissionStage } from '../model/mission-stage.model';
import { NewMontant } from '../model/montants.model';
import { Soutien } from '../model/soutien.model';
import { User } from '../model/user.model';

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

  getLettreMission(missionId: number): Observable<string> {
    return this.httpClient.get<string>(
      `${this.baseUrl + '/raportlettremission/' + missionId}`
    );
  }

  getLettreManif(manifId: number): Observable<string> {
    return this.httpClient.get<string>(
      `${this.baseUrl + '/raportlettremanif/' + manifId}`
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

  exportNvmontantmanif(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl + '/raportNVmontantmanif/' + id}`, {
      withCredentials: true,
    });
  }

  exportNvmontantmission(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl + '/aportNvmontantmis/' + id}`, {
      withCredentials: true,
    });
  }

}
