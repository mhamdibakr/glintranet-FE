import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8091/api';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  createCompany(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/company`, data);
  }

  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${baseUrl}/company/${id}`);
  }

  updateCompany(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/company/${id}`, data);
  }

  deleteCompany(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/company/${id}`, { responseType: 'text' });
  }

  getCompanies(params: any): Observable<any> {
    return this.httpClient.get<Company[]>(`${baseUrl}/company`, { params });
  }

}
