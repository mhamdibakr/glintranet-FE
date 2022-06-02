import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalExperience } from 'app/main/CvTech/models/global-experience.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class GlobalExperienceService {

  constructor(private httpClient: HttpClient) { }

  getGlobaleExperiences(params: any): Observable<any> {
    return this.httpClient.get<GlobalExperience[]>(`${baseUrl}/experience`, { params });
  }

  getGlobaleExperience(id: number): Observable<GlobalExperience> {
    return this.httpClient.get<GlobalExperience>(`${baseUrl}/experience/${id}`);
  }

  createGlobaleExperience(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/experience`, data);
  }

  updateGlobaleExperience(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/experience/${id}`, data);
  }

  deleteGlobaleExperience(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/experience/${id}`, { responseType: 'text' });
  }
}
