
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AllCampaign } from '../models/all-campaign.model';
import { HttpClient, HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';
import { AllUsers } from '../models/allusers.model';

const baseUrl = environment.UrlCvTech;

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(private http : HttpClient) { }
  
  getAllUsers(): Observable<AllUsers[]> {
    return this.http.get<AllUsers[]>(`${baseUrl}/candidat`);
  }

  getbyid(id: number): Observable<AllUsers> {
    return this.http.get<AllUsers>(`${baseUrl}/candidat/${id}`);
    
  }

  getAllPagination(params: any): Observable<any> {
    return this.http.get<AllUsers[]>(`${baseUrl}/candidat`, { params });
  }


}