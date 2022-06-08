<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyEntity } from '../models/company-entity.model';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

// const baseUrl = 'http://localhost:8091/api';
const baseUrl = environment.UrlCompany;

>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896

@Injectable({
  providedIn: 'root'
})
export class CompanyEntityService {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private httpClient: HttpClient) { }

  createCompanyEntity(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/companyEntity`, data);
  }

  getCompanyEntity(id: number): Observable<CompanyEntity> {
    return this.httpClient.get<CompanyEntity>(`${baseUrl}/companyEntity/${id}`);
  }

  updateCompanyEntity(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/companyEntity/${id}`, data);
  }

  deleteCompanyEntity(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/companyEntity/${id}`, { responseType: 'text' });
  }

  getCompanyentities(params: any): Observable<any> {
    return this.httpClient.get<CompanyEntity[]>(`${baseUrl}/companyEntity`, { params });
  }

  getentitiesofcompany(params: any): Observable<any> {
    return this.httpClient.get<CompanyEntity[]>(`${baseUrl}/companyEntity/getd`, { params });
  }

>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
}
