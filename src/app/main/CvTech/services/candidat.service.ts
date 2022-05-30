import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat.model';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http : HttpClient) { }
  
  getAllCandidat(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${baseUrl}/candidat`);
  }

  // En cours
  // addCandidat(data: any): Observable<any> {
  //   return this.http.post(`${baseUrl}/postulation/add`, data);
  // }

}