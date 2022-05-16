import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadre } from '../model/cadre.model';
import { documents } from '../model/documents.model';
import { DonneePro } from '../model/donnee-pro.model';
import { Manifestation } from '../model/manifestation.model';
import { messages } from '../model/messages.model';
import { MissionStage } from '../model/mission-stage.model';
import { Soutien } from '../model/soutien.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8000/user';

  constructor(private httpClient: HttpClient) {}

  getByMail(email: string): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl + '/login/' + email}`);
  }

  addManif(manif: Manifestation): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + '/addmanifestation'}`, manif);
  }

  addMissionStage(mStage: MissionStage): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + '/addmission'}`, mStage);
  }

  saveDonnesPro(donne: DonneePro): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + '/adddonéespro'}`, donne, {
      withCredentials: true,
    });
  }

  addSoutien(
    soutien: Soutien,
    isManif: Boolean,
    manifId: number,
    missionId: number
  ): Observable<Object> {
    if (isManif) {
      return this.httpClient.post(
        `${this.baseUrl + '/addsoutienmanif/' + manifId}`,
        soutien
      );
    } else {
      return this.httpClient.post(
        `${this.baseUrl + '/addsoutienmission/' + missionId}`,
        soutien
      );
    }
  }

  addCadre(cadre: Cadre, missionId: number): Observable<Object> {
    return this.httpClient.post(
      `${this.baseUrl + '/addcadre/' + missionId}`,
      cadre
    );
  }

  addDocuments(
    file: File,
    isManif: Boolean,
    manifId: number,
    missionId: number
  ): Observable<Object> {
    if (isManif) {
      return this.httpClient.post(
        `${this.baseUrl + '/add_document/manifestation/' + manifId}`,
        file
      );
    } else {
      return this.httpClient.post(
        `${this.baseUrl + '/add_document/missionstage/' + missionId}`,
        file
      );
    }
  }

  getMyMissionStages(): Observable<MissionStage[]> {
    return this.httpClient.get<MissionStage[]>(
      `${this.baseUrl + '/getmStage'}`
    );
  }

  getMyManifestations(): Observable<Manifestation[]> {
    return this.httpClient.get<Manifestation[]>(
      `${this.baseUrl + '/getmanifestations'}`
    );
  }

  addFiles(mStageId: number, documents: documents): Observable<Object> {
    const formData = new FormData();
    console.log(typeof documents.filecin.name);
    formData.append('filecin', documents.filecin, documents.filecin.name);
    formData.append('fileA', documents.fileA, documents.fileA.name);
    formData.append('fileB', documents.fileB, documents.fileB.name);
    formData.append('fileC', documents.fileC, documents.fileC.name);
    formData.append('fileD', documents.fileD, documents.fileD.name);
    formData.append('fileE', documents.fileE, documents.fileE.name);
    return this.httpClient.post(
      `${this.baseUrl + '/add_documentMST/' + mStageId}`,
      formData
    );
  }

  addFilesManif(manifId: number, documents: documents): Observable<Object> {
    const formData = new FormData();
    console.log(typeof documents.filecin.name);
    formData.append('filecin', documents.filecin, documents.filecin.name);
    formData.append('fileA', documents.fileA, documents.fileA.name);
    formData.append('fileB', documents.fileB, documents.fileB.name);
    formData.append('fileC', documents.fileC, documents.fileC.name);
    formData.append('fileD', documents.fileD, documents.fileD.name);
    formData.append('fileE', documents.fileE, documents.fileE.name);
    return this.httpClient.post(
      `${this.baseUrl + '/add_documentM/' + manifId}`,
      formData
    );
  }

  addAll(
    mStage: MissionStage,
    cadre: Cadre,
    soutien: Soutien
  ): Observable<Object> {
    mStage.setcadre = cadre;
    mStage.setsoutien = soutien;

    return this.httpClient.post(
      `${this.baseUrl + '/missionstageadd'}`,
      mStage,
      { withCredentials: true }
    );
  }

  addAllManif(manif: Manifestation, soutien: Soutien): Observable<Object> {
    manif.setsoutien = soutien;
    return this.httpClient.post(
      `${this.baseUrl + '/manifestationadd'}`,
      manif,
      { withCredentials: true }
    );
  }

  addMessage(mssg: messages): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl + '/contact'}`, mssg);
  }
}
