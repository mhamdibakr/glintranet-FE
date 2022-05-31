import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { CurrentSituation } from '../models/current-situation.model';

import { CoreTranslationService } from '@core/services/translation.service';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';

@Component({
  selector: 'app-current-situation-management',
  templateUrl: './current-situation-management.component.html',
  styleUrls: ['./current-situation-management.component.scss']
})
export class CurrentSituationManagementComponent implements OnInit {
  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  CSituationList: CurrentSituation[] = [];

  currentSituation: CurrentSituation = {
    id: null,
    name: '',
    description: '',
  }

  options: CurrentSituation = {
    id: null,
    name: '',
    description: ''
  }

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private modalService: NgbModal, private cvTechService: CvTechService, private _coreTranslationService: CoreTranslationService) {
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
            name: 'Current Situation Management',
            isLink: false
          }
        ]
      }
    };
    this.getCSituations();
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


  getCSituations(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.cvTechService.getCurrentSituations(params).subscribe(
      {
        next: (data) => {
          console.log(data);
          const { content, totalElements } = data;
          this.CSituationList = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  pageChanged(event: any): void {
    this.page = event;
    this.getCSituations();
  }

  deleteCSituation(id: number): void {
    this.cvTechService.deleteCurrentSituation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getCSituations();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    console.log(id);
    this.cvTechService.getCurrentSituation(id).subscribe({
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


  updateCSituation(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.cvTechService.updateCurrentSituation(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getCSituations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveCSituation(): void {
    const data = {
      name: this.currentSituation.name,
      description: this.currentSituation.description
    }
    this.cvTechService.createCurrentSituation(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getCSituations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
