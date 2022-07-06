import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.Urlglintranet

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http : HttpClient) { }

  getAllReports() : Observable<any>
  {
    return this.http.get<any>(`${baseUrl}/reporting`)
  }
}
