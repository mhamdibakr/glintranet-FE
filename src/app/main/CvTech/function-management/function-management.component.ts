import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Function } from '../models/function.model';

import { FunctionsService } from 'app/services/functions.service';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';

@Component({
  selector: 'app-function-management',
  templateUrl: './function-management.component.html',
  styleUrls: ['./function-management.component.scss']
})
export class FunctionManagementComponent implements OnInit {

  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  functionlist: Function[] = [];

  function: Function = {
    id: null,
    name: '',
    description: '',
  }

  options: Function = {
    id: null,
    name: '',
    description: ''
  }

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private modalService: NgbModal, private functionService: FunctionsService, private _coreTranslationService: CoreTranslationService) {
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
            name: 'Functions Management',
            isLink: false
          }
        ]
      }
    };
  }


  modalOpenPrimary(modalPrimary, id) {
    this.functionService.getFunction(id).subscribe({
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
    this.getFunctions();
  }


  getFunctions(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.functionService.getFunctions(params).subscribe(
      {
        next: (data) => {
          console.log(data.length);
          const { content, totalElements } = data;
          this.functionlist = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  deleteFunction(id: number): void {
    this.functionService.deleteFunction(id)
      .subscribe(
        data => {
          console.log(data);
          this.getFunctions();
        },
        error => console.log(error));
  }


  updateFunction(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.functionService.updateFunction(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getFunctions();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveFunction(): void {
    const data = {
      name: this.function.name,
      description: this.function.description
    }
    this.functionService.createFunction(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getFunctions();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
