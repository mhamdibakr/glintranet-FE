import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Function } from 'app/main/CvTech/models/function.model';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8092/api';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private httpClient: HttpClient) { }

  getFunctions(params: any): Observable<any> {
    return this.httpClient.get<Function[]>(`${baseUrl}/function`, { params });
  }

  getFunction(id: number): Observable<Function> {
    return this.httpClient.get<Function>(`${baseUrl}/function/${id}`);
  }

  
  createFunction(data: any): Observable<any> {
    return this.httpClient.post(`${baseUrl}/function`, data);
  }

  updateFunction(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/function/${id}`, data);
  }

  deleteFunction(id: number): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/function/${id}`, { responseType: 'text' });
  }
}
