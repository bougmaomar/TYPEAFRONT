import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonneePro } from '../model/donnee-pro.model';
import { Manifestation } from '../model/manifestation.model';
import { messages } from '../model/messages.model';
import { MissionStage } from '../model/mission-stage.model';
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
}
