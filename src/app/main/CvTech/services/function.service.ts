import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Function } from '../models/function';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private http : HttpClient) { }

  getFunctions(): Observable<Function[]> {
    return this.http.get<Function[]>(`${baseUrl}/function`);
  }

  addFunction(func : Function): Observable<any>
  {
    return this.http.post(`${baseUrl}/function`,func)
  }

  deleteFunction(id : number) : Observable<any>
  {
    return this.http.delete(`${baseUrl}/function/${id}`, { responseType : 'text'})
  }
}
