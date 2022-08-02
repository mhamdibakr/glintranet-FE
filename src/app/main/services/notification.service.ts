import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.Urlglintranet
 
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http : HttpClient) { }

  getAllNotification(empId: any): Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/notification/${empId}`)
  }

  readAllNotifications(empId: any) {
    return this.http.get(`${baseUrl}/notification/readAll/${empId}`);
  }

  readNotification(id: any) {
    return this.http.get(`${baseUrl}/notification/readNotif/${id}`);
  }
}
