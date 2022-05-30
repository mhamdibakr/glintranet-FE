
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { AllCampaign } from '../models/all-campaign.model';
import { HttpClient, HttpClientModule, HttpEvent, HttpRequest } from '@angular/common/http';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class AllCampaignService {

  constructor(private http : HttpClient) { }
  
  getAllCampaign(): Observable<AllCampaign[]> {
    return this.http.get<AllCampaign[]>(`${baseUrl}/campaign`);
  }

  getbyid(id: number): Observable<AllCampaign> {
    return this.http.get<AllCampaign>(`${baseUrl}/campaign/${id}`);
  }

  getAllPagination(params: any): Observable<any> {
    return this.http.get<AllCampaign[]>(`${baseUrl}/campaign`, { params });
  }

  DeleteCampaignById(id : number): Observable<HttpEvent<any>> {
   return this.http.delete<HttpEvent<any>>(`${baseUrl}/campaign/${id}`); 
  }

}
