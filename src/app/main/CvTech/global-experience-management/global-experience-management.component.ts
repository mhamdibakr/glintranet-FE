import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalExperience } from '../models/global-experience.model';

import { CoreTranslationService } from '@core/services/translation.service';
import { GlobalExperienceService } from 'app/services/global-experience.service';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';

@Component({
  selector: 'app-global-experience-management',
  templateUrl: './global-experience-management.component.html',
  styleUrls: ['./global-experience-management.component.scss']
})
export class GlobalExperienceManagementComponent implements OnInit {

  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  GExperienceList: GlobalExperience[] = [];

  globalExperience: GlobalExperience = {
    id: null,
    name: '',
    description: '',
  }

  options: GlobalExperience = {
    id: null,
    name: '',
    description: ''
  }
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
  */
  constructor(private modalService: NgbModal, private globalexperienceService: GlobalExperienceService, private _coreTranslationService: CoreTranslationService) {
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
            name: 'Globale Experience Management',
            isLink: false
          }
        ]
      }
    };
    this.getGExperiences();
  }

  modalOpenPrimary(modalPrimary, id) {
    this.globalexperienceService.getGlobaleExperience(id).subscribe({
      next: (data) => {
        this.options = data;
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
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


  pageChanged(event: any): void {
    this.page = event;
    this.getGExperiences();
  }

  getGExperiences(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.globalexperienceService.getGlobaleExperiences(params).subscribe(
      {
        next: (data) => {
          console.log(data.length);
          const { content, totalElements } = data;
          this.GExperienceList = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  deleteExperience(id: number): void {
    this.globalexperienceService.deleteGlobaleExperience(id)
      .subscribe(
        data => {
          console.log(data);
          this.getGExperiences();
        },
        error => console.log(error));
  }


  updateExperience(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.globalexperienceService.updateGlobaleExperience(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getGExperiences();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveExperience(): void {
    const data = {
      name: this.globalExperience.name,
      description: this.globalExperience.description
    }
    this.globalexperienceService.createGlobaleExperience(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getGExperiences();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
