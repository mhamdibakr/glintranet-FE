import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { Function } from '../models/function.model';

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
            name: 'Functions Management',
            isLink: false
          }
        ]
      }
    };
  }


  modalOpenPrimary(modalPrimary, id) {
    this.cvTechService.getGlobaleExperience(id).subscribe({
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
    this.cvTechService.getFunctions(params).subscribe(
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
    this.cvTechService.deleteFunction(id)
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
    this.cvTechService.updateFunction(data.id, data).subscribe(
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
    this.cvTechService.createFunction(data).subscribe(
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
