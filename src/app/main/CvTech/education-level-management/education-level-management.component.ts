import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { Education } from '../models/education.model';

@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {

  searchTitle = "search";
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

  constructor(private modalService: NgbModal, private cvTechService: CvTechService) { }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Education Level Management',
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

  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.EducationList.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.EducationList = temp;
  }

  getParams(page: number, pageSize: number, title: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
      if (pageSize) {
        params['size'] = pageSize;
      }
      if (title) {
        params['title'] = title;
      }
      return params;
    }
  }


  getEducations(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.cvTechService.getEducationsPagination(params).subscribe(
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
    this.cvTechService.deleteEducation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getEducations();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    console.log(id);
    this.cvTechService.getEducation(id).subscribe({
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
    this.cvTechService.updateEducation(data.id, data).subscribe(
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
    this.cvTechService.createEducation(data).subscribe(
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
