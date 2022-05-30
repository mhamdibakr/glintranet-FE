import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Postulation } from '../models/postulation.model';
import { HttpClient, HttpEvent } from '@angular/common/http';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})

export class PostulationService {

  constructor(private http : HttpClient) { }
  
  getInfo(): Observable<Postulation[]> {
    return this.http.get<Postulation[]>(`${baseUrl}/postulation`);
  }

  post(data: any): Observable<Postulation> {
    return this.http.post<Postulation>(`${baseUrl}/postulation`, data)
  }

  deletebyid(id: number): Observable<HttpEvent<any>> {
    return this.http.delete<HttpEvent<any>>(`${baseUrl}/postulation/${id}`);
  }

  getAllPagination(params: any): Observable<any> {
    return this.http.get<Postulation[]>(`${baseUrl}/postulation`, { params });
  }


}
