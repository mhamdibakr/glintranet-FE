import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Education } from 'app/main/CvTech/models/education.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClient: HttpClient) { }

  getEducations(params: any): Observable<any> {
    return this.httpClient.get<Education[]>(`${baseUrl}/education`, { params });
  }

  getEducation(id: number): Observable<Education> {
    return this.httpClient.get<Education>(`${baseUrl}/education/${id}`);
  }

  createEducation(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/education`, data);
  }

  updateEducation(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/education/${id}`, data);
  }

  deleteEducation(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/education/${id}`, { responseType: 'text' });
  }
}
