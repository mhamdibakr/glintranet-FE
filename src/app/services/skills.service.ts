import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from 'app/main/CvTech/models/skills.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private httpClient: HttpClient) { }

  getSkills(params: any): Observable<any> {
    return this.httpClient.get<Skills[]>(`${baseUrl}/skills`, { params });
  }

  getSkill(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(`${baseUrl}/skills/${id}`);
  }

  createSkill(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/skills`, data);
  }

  updateSkill(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/skills/${id}`, data);
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/skills/${id}`, { responseType: 'text' });
  }
}
