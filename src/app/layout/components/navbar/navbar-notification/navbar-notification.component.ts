import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from 'app/main/services/notification.service';


@Component({
  selector: 'app-navbar-notification',
  templateUrl: './navbar-notification.component.html'
})
export class NavbarNotificationComponent implements OnInit {
  // Public
  public notifications: any;
  currentUser: any;

  /**
   *
   * @param {NotificationsService} _notificationsService
   */
  constructor(private notificationService: NotificationService, private router: Router) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(this.currentUser);
    
    this.getAllNotifs(this.currentUser.id)
  }

  getAllNotifs(id: any){
    this.notificationService.getAllNotification(id).subscribe({
      next: (data: any) => {
        console.log(data)
        this.notifications = data
      },
      error: (err) => console.error(err)
    })
  }

  readAllNotif() {
    this.notificationService.readAllNotifications(this.currentUser.id).subscribe({
      next : (res) => {
        console.log(res);
        this.getAllNotifs(this.currentUser.id);
      },
      error : (err) => console.error(err)
    })
  }

  readNotification(link: string, id: any) {
    this.notificationService.readNotification(id).subscribe({
      next : (res) => {
        console.log(res);
        this.getAllNotifs(this.currentUser.id);
        this.router.navigateByUrl(link);
      },
      error : (err) => console.error(err)
    })
  }
}
