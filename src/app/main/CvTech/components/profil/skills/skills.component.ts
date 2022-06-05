import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { SkillService } from '../../../services/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})



export class SkillsComponent implements OnInit {
  public contentHeader: object;
  data!: Skill[];

  constructor(private skillService : SkillService) { }

  ngOnInit(): void 
  {
    this.getData()
    this.contentHeader = {
      headerTitle: 'Skills Managment',
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
            name: 'Skills Management',
            isLink: false
          }
        ]
      }
    };
  }

  public getData() : void
  {
    this.skillService.getSkills().subscribe(
      (response : Skill[]) =>
      {
        this.data = response,
        console.log(this.data)
      }
    )

  }

}
