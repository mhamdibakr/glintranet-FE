import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { User } from 'app/auth/models';

@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) { }

  /**
   * Get all users
   */
  getAll() {
    return this._http.get<User[]>(`${environment.apiUrl}/employee`);
  }

  /**
   * Get user by id
   */
  getById(id: any) {
    return this._http.get<User>(`${environment.apiUrl}/api/employee/${id}`);
  }
}
