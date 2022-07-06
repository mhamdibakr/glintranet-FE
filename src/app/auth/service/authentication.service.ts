import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: any;

  public usr: User = {
    id: "",
    avatar: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    token: "",
    role: Role.User
  };

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService, private _userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject;
  }

  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // get user informations
  public userInf(id: number): User {
    this._userService.getById(id).subscribe({
      next: (data) => {
        this.usr = data
      },
      error: (err) => console.error(err)
    });
    return this.usr;
  }
  /**
   *  Confirms if user is admin
   */
  // get isAdmin() {
  //   return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  // }

  // /**
  //  *  Confirms if user is client
  //  */
  // get isClient() {
  //   return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  // }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  public loggedUser : any
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/api/login`, { email, password })
      .pipe(
        map(user => {
          // this.userInf(user.value.id);
          this.loggedUser = user
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                this.loggedUser.role +
                ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.username + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
              console.log(
                this.loggedUser.id
              );
            }, 2500);

            // notify
          
          
            this.currentUserSubject.next(this.loggedUser);
          }

          return user;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
  }
}
