import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalExperience } from 'app/main/CvTech/models/global-experience';
import { GlobalExperienceService } from 'app/main/CvTech/services/global-experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  public exprienceForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  })
  public exp : GlobalExperience = {name : '', description : ''}

  constructor(private exprienceService : GlobalExperienceService) { }

  ngOnInit(): void {

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

}
