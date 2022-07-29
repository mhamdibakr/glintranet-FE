import { Component, OnInit } from '@angular/core';

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
  constructor(private notificationService: NotificationService) {}

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
}
