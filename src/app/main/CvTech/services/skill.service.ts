import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../models/skill';
import { environment } from 'environments/environment';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})


export class SkillService  
{
  constructor(private http : HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${baseUrl}/skills`);
  }

  addSkill(skill : Skill): Observable<any>
  {
    return this.http.post(`${baseUrl}/skills`,skill)
  }

  deleteSkill(id : number) : Observable<any>
  {
    return this.http.delete(`${baseUrl}/skills/${id}`,{responseType: 'text'})
  }

}
