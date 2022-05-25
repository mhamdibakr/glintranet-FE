import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { Availability } from '../models/availability.model';

@Component({
  selector: 'app-availability-management',
  templateUrl: './availability-management.component.html',
  styleUrls: ['./availability-management.component.scss']
})
export class AvailabilityManagementComponent implements OnInit {

  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  AvailabilityList: Availability[] = [];

  availability: Availability = {
    id: null,
    name: '',
    description: '',
  }

  options: Availability = {
    id: null,
    name: '',
    description: ''
  }

  constructor(private modalService: NgbModal, private cvTechService: CvTechService) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'GL INTRANET',
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
            name: 'Availability Management',
            isLink: false
          }
        ]
      }
    };
    this.getAvailabilities();
  }

  getParams(page: number, pageSize: number, title: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
      if (pageSize) {
        params['size'] = pageSize;
      }
      if (title) {
        params['name'] = title;
      }
      return params;
    }
  }


  getAvailabilities(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.cvTechService.getAvailabilities(params).subscribe(
      {
        next: (data) => {
          console.log(data);
          const { content, totalElements } = data;
          this.AvailabilityList = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  pageChanged(event: any): void {
    this.page = event;
    this.getAvailabilities();
  }

  deleteAvailability(id: number): void {
    this.cvTechService.deleteAvailability(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAvailabilities();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    console.log(id);
    this.cvTechService.getAvailability(id).subscribe({
      next: (data) => {
        this.options = data;
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary',
    });
  }


  updateAvailability(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.cvTechService.updateAvailability(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getAvailabilities();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveAvailability(): void {
    const data = {
      name: this.availability.name,
      description: this.availability.description
    }
    this.cvTechService.createAvailability(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getAvailabilities();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


}
