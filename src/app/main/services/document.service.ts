import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = environment.Urlglintranet

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http : HttpClient) { }

  upload(file : File, empId : number, typeId : number) : Observable<HttpEvent<{}>>
  {
    const data : FormData = new FormData();
    data.append('file', file);

    return this.http.post(`${baseUrl}/document/${empId}/${typeId}`, data, {
        observe : 'events'
    });
  }

  download(id : number) : Observable<any>
  {
    return this.http.get(`${baseUrl}/document/${id}`)
  }


  getDocuments() : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/document`)
  }



}
