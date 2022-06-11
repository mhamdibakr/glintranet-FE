import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from '../../../models/skill';
import { SkillService } from '../../../services/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})



export class SkillsComponent implements OnInit 
{
  public skill : Skill = {name: '', description :''}
  public contentHeader: object;
  public data?: Skill[];

  constructor(private skillService : SkillService) { }

  skillForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void 
  {
    this.getData()
    
    this.contentHeader = {
      headerTitle: 'Skills',
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
            name: 'Skills',
            isLink: false
          }
        ]
      }
    };
  }

  public getData() : void
  {
    this.skillService.getSkills().subscribe(
      (res : any) => {
        this.data = res.content
        //console.log(res)
      } ,
      (error : HttpErrorResponse) =>
      {
        alert(error.message)
      }
    )
  }

  public addData() : void 
  {
    this.skill = this.skillForm.value;
   
    const skillData = 
    {
      name : this.skill.name,
      description : this.skill.description
    }
    this.skillService.addSkill(skillData).subscribe(
      (response : Skill) => { console.log(response), window.location.reload() },
      (error : HttpErrorResponse) => { alert(error.message) }
      )
    
  }

  public deleteData(id : number) : void 
  {
    this.skillService.deleteSkill(id).subscribe(
      () => { window.location.reload() },
      (error : HttpErrorResponse) => {  alert(error.message)}
      )
  }

}
