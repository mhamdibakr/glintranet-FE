import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Faq } from '../models/faq.model';

const baseUrl = environment.Urlglintranet;

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http : HttpClient) { }


  getAllFAQs() : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/faq`)
  }
  
  getAllFAQsBySection(sectionId: number) : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/faq/section/${sectionId}`)
  }

  getFAQById(id: number) : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/faq/${id}`)
  }

  AddFAQ(faq: Faq) : Observable<any[]>
  {
    return this.http.post<any[]>(`${baseUrl}/faq`, faq)
  }
}
