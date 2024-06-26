import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalExperience } from 'app/main/CvTech/models/global-experience';
import { GlobalExperienceService } from 'app/main/CvTech/services/global-experience.service';

@Component({
  selector: 'app-global-experience-management',
  templateUrl: './global-experience-management.component.html',
  styleUrls: ['./global-experience-management.component.scss']
})
export class GlobalExperienceManagementComponent implements OnInit {

  public pagePosition = 2;
  public totalPages = 0;
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  public chkBoxSelected = [];

  public exprienceForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })
  public exp: GlobalExperience = { name: '', description: '' }
  public data?: GlobalExperience[]

  constructor(private exprienceService: GlobalExperienceService) { }

  ngOnInit(): void {
    this.getAllData();

    this.contentHeader = {
      headerTitle: 'Global Experiences',
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
            name: 'Profil',
            isLink: true,
            link: '/'
          },
          {
            name: 'Global Experience',
            isLink: false
          }
        ]
      }
    };
  }

  public count = 0;
  public page = 1;
  public name = '';
  public description = '';


  public pageChanged(event: any): void {
    this.page = event;
    console.log(event);
    this.getAllData();
  }


  getParams(page: number, pageSize: number, name: string, description: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    if (name) {
      params['name'] = name;
    }
    if (description) {
      params['description'] = description;
    }

    return params;
  }

  getAllData(): void {
    const params = {
      page: this.page - 1,
      size: 3,
      name: this.name,
      description: this.description
    }

    this.exprienceService.getAllPagination(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages * 10
          this.data = response.content
          console.log(this.data);

        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // getData() : void
  // {
  //   this.exprienceService.getExperiences().subscribe(
  //     (response : any) => { this.data = response.content,console.log(response)},
  //     (error : HttpErrorResponse) =>
  //     {
  //       alert(error.message)
  //     }
  //   )
  // }

  addData(): void {

    this.exp = this.exprienceForm.value
    const experienceData =
    {
      name: this.exp.name,
      description: this.exp.description
    }
    this.exprienceService.addExperience(experienceData).subscribe(
      (response: GlobalExperience) => { console.log(response), window.location.reload() },
      (error: HttpErrorResponse) => { alert(error.message) }
    )
  }


  deleteData(id: number): void {
    this.exprienceService.deleteExperience(id).subscribe(
      () => { window.location.reload() },
      (error: HttpErrorResponse) => { alert(error.message) }
    )

  }




}
