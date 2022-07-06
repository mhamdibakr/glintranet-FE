import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrl = environment.Urlglintranet
 
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http : HttpClient) { }

  getUser(id : number) : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/employee/${id}`)
  }

  getAllUsers() : Observable<any[]>
  {
    return this.http.get<any[]>(`${baseUrl}/employee`)
  }

  addUser(user : User) : Observable<any[]>
  {
    return this.http.post<any[]>(`${baseUrl}/employee`, user)
  }

  updateUser(user : User, id : number) : Observable<any[]>
  {
    return this.http.put<any[]>(`${baseUrl}/employee/${id}`, user)
  }
  
  deleteUser(id: number) : Observable<any[]>
  {
    return this.http.delete<any[]>(`${baseUrl}/employee/${id}`)
  }
}
