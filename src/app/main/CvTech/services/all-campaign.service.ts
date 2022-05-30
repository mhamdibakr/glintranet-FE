
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

}
