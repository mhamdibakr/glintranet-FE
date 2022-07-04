import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const baseUrl = environment.Urlglintranet
 
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  getFeedBacks(id : number) : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/feedback/project/${id}`)
  }

  getFeedBackTypes() : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/fbtype`)
  }

  addFeedBack(feedBackRequest : any) : Observable<any[]>
  {
    return this.http.post<any[]>(`${baseUrl}/feedback`, feedBackRequest)
  }



}
