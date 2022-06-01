import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentSituation } from 'app/main/CvTech/models/current-situation.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class CurrentSituationService {

  constructor(private httpClient: HttpClient) { }

  getCurrentSituations(params: any): Observable<any> {
    return this.httpClient.get<CurrentSituation[]>(`${baseUrl}/situation`, { params });
  }

  getCurrentSituation(id: number): Observable<CurrentSituation> {
    return this.httpClient.get<CurrentSituation>(`${baseUrl}/situation/${id}`);
  }

  createCurrentSituation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/situation`, data);
  }

  updateCurrentSituation(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/situation/${id}`, data);
  }

  deleteCurrentSituation(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/situation/${id}`, { responseType: 'text' });
  }
}
