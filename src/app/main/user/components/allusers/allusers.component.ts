import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { UserService } from 'app/main/services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {

  public pagePosition = 1;
  public totalPages = 0;
  contentHeader: Object;

  public chkBoxSelected = [];

  public ColumnMode = ColumnMode;

  constructor(private modalService: NgbModal, private userService: UserService) { }


  ngOnInit(): void {

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

  users: any[];

  getAllUsers(): void {

    this.userService.getAllUsers().subscribe(
      {
        next: (response: any) => {
          this.users = response
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }


  private modal = null;
  private id = 0;

  modalOpenDanger(modalDanger, id: any) {
    this.id = id
    this.modal = this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }

  deleteCandidat() {
    this.modal.close('Accept click');
    this.userService.deleteUser(this.id).subscribe({
      next: () => this.ngOnInit(),
      error: (err) => console.log(err)
    })
  }

}
