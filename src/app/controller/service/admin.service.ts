import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manifestation } from '../model/manifestation.model';
import { MissionStage } from '../model/mission-stage.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8000/admin"

  constructor(private httpClient: HttpClient) { }

  findUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl + "/Users"}`)
  }

  findByNom(name: string): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl + "/username/"} + name`)
  }

  findMissions(): Observable<MissionStage[]>{
    return this.httpClient.get<MissionStage[]>(`${this.baseUrl + "/missions"}`)
  }

  findManifestation(): Observable<Manifestation[]>{
    return this.httpClient.get<Manifestation[]>(`${this.baseUrl + "/missions"}`)
  }

  
}
