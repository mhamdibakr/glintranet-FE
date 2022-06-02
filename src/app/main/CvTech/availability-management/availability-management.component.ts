import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Availability } from '../models/availability.model';

import { CoreTranslationService } from '@core/services/translation.service';
import { AvailabilityService } from 'app/services/availability.service';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';

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

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private modalService: NgbModal, private availabilityService: AvailabilityService, private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(en, fr)
  }

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
    this.availabilityService.getAvailabilities(params).subscribe(
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
    this.availabilityService.deleteAvailability(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAvailabilities();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    console.log(id);
    this.availabilityService.getAvailability(id).subscribe({
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
    this.availabilityService.updateAvailability(data.id, data).subscribe(
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
    this.availabilityService.createAvailability(data).subscribe(
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
