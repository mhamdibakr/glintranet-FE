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
  public contentHeader: object;
  public data?: GlobalExperience[]
  public exp : GlobalExperience = {name : '', description : ''}

  public exprienceForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  })
  constructor(private exprienceService : GlobalExperienceService) { }

  ngOnInit(): void {
   this.getData()
   this.contentHeader = {
    headerTitle: 'Experience',
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
          name: 'Experience',
          isLink: false
        }
      ]
    }
  };
  }

  getData() : void
  {
    this.exprienceService.getExperiences().subscribe(
      (response : any) => { this.data = response.content,console.log(response)},
      (error : HttpErrorResponse) =>
      {
        alert(error.message)
      }
    )
  }

  addData() : void 
  {
 
    this.exp = this.exprienceForm.value
    const experienceData = 
    {
      name : this.exp.name,
      description : this.exp.description
    }
    this.exprienceService.addExperience(experienceData).subscribe(
      (response : GlobalExperience) => { console.log(response), window.location.reload()},
      (error : HttpErrorResponse) => {  alert(error.message)}
    )
  }

  deleteData(id : number) : void 
  {
   this.exprienceService.deleteExperience(id).subscribe(
     () => {  window.location.reload() },
     (error : HttpErrorResponse) => { alert(error.message)}
   )
    
  }




}
