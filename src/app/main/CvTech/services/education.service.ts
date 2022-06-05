import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http : HttpClient) { }
  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(`${baseUrl}/education`);
  }
  
}
