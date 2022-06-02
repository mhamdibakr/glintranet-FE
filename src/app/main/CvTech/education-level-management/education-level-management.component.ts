import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../models/education.model';

import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';
import { EducationService } from 'app/services/education.service';


@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {


  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  EducationList: Education[] = [];

  education: Education = {
    id: null,
    name: '',
    description: '',
  }

  options: Education = {
    id: null,
    name: '',
    description: ''
  }


  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private modalService: NgbModal, private educationService: EducationService, private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(en, fr)
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
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
            name: 'Education Level Management',
            isLink: false
          }
        ]
      }
    };

    this.getEducations();
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


  getEducations(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.educationService.getEducations(params).subscribe(
      {
        next: (data) => {
          console.log(data);
          const { content, totalElements } = data;
          this.EducationList = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  pageChanged(event: any): void {
    this.page = event;
    this.getEducations();
  }

  deleteEducation(id: number): void {
    this.educationService.deleteEducation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getEducations();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    console.log(id);
    this.educationService.getEducation(id).subscribe({
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


  updateEducation(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.educationService.updateEducation(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getEducations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveEducation(): void {
    const data = {
      name: this.education.name,
      description: this.education.description
    }
    this.educationService.createEducation(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getEducations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
