
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';
import { AllCandidat } from '../models/all-candidat.model';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class AllCandidatService {

  constructor(private http : HttpClient) { }

  getAllUsers(): Observable<AllCandidat[]> {
    return this.http.get<AllCandidat[]>(`${baseUrl}/candidat`);
  }

  getbyid(id: number): Observable<AllCandidat> {
    return this.http.get<AllCandidat>(`${baseUrl}/candidat/${id}`);
    
  }

  getAllPagination(params: any): Observable<any> {
    return this.http.get<AllCandidat[]>(`${baseUrl}/candidat`, { params });
  }

  addCandidat(candidat: AllCandidat): Observable<any> {
    return this.http.post(`${baseUrl}/candidat/`,candidat);
  }

  update(data: any, candidat_id: number):  Observable<HttpEvent<any>> {
    return this.http.put<HttpEvent<any>>(`${baseUrl}/candidat/${candidat_id}`, data);
  }

  
  DeleteCandidatById(id : number): Observable<HttpEvent<any>> {
    return this.http.delete<HttpEvent<any>>(`${baseUrl}/candidat/${id}`); 
   }
}