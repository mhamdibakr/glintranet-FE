import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Availability } from 'app/main/CvTech/models/availability.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private httpClient: HttpClient) { }

  getAvailabilities(params: any): Observable<any> {
    return this.httpClient.get<Availability[]>(`${baseUrl}/availablity`, { params });
  }

  getAvailability(id: number): Observable<Availability> {
    return this.httpClient.get<Availability>(`${baseUrl}/availablity/${id}`);
  }

  createAvailability(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/availablity`, data);
  }

  updateAvailability(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/availablity/${id}`, data);
  }

  deleteAvailability(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/availablity/${id}`, { responseType: 'text' });
  }
}
