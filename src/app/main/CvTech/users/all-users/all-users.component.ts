import { Component, OnInit } from '@angular/core';
import { AllUsers } from '../../models/allusers.model';
import { AllUsersService } from "../../services/all-user.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})

export class AllUsersComponent implements OnInit {

  public pagePosition = 2;
public totalPages=0;
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  public chkBoxSelected = [];

  constructor(private modalService: NgbModal, private AllUsersService: AllUsersService) { }


  ngOnInit(): void {

    // this.getData()
    this.getAllUsers();

    this.contentHeader = {
      headerTitle: 'Users',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'CvTech',
            isLink: true,
            link: '/'
          },
          {
            name: 'All Users',
            isLink: false
          }
        ]
      }
    };
  }

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  page = 1;
  count = 0;
  pageSize = 4;
  email = ''

  public pageChanged(event: any): void {
    this.page = event;
    console.log(event);
    this.getAllUsers();
  }

  getParams(page: number, pageSize: number, email: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    if (email) {
      params['email'] = email;
    }

    return params;
  }
  Users?: AllUsers[];

  getAllUsers(): void {
    const params = {
      page : this.page-1,
      size : 2,
      email : this.email
    }
    
    this.AllUsersService.getAllPagination(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          // this.Users = content;
          this.Users = content
          this.count = totalElements;
          this.totalPages = totalPages*10
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }
  
}