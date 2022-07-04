import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

const baseUrl = environment.Urlglintranet;

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }


  getAllProjects() : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/project`)
  }

  addProject(projectReq: Project) : Observable<any[]>
  {
    return this.http.post<any[]>(`${baseUrl}/project`, projectReq)
  }
}
