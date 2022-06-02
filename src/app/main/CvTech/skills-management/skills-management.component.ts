import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from '../models/skills.model';

import { SkillsService } from 'app/services/skills.service';
import { locale as en } from '../i18n/en';
import { locale as fr } from '../i18n/fr';

@Component({
  selector: 'app-skills-management',
  templateUrl: './skills-management.component.html',
  styleUrls: ['./skills-management.component.scss']
})
export class SkillsManagementComponent implements OnInit {


  searchTitle = "";
  page = 1;
  count = 0;
  pageSize = 5;

  public contentHeader: object;

  SkillList: Skills[] = [];

  skill: Skills = {
    id: null,
    name: '',
    description: '',
  }

  options: Skills = {
    id: null,
    name: '',
    description: ''
  }
  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private modalService: NgbModal, private skillsService: SkillsService, private _coreTranslationService: CoreTranslationService) {
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
            name: 'Globale Skill Management',
            isLink: false
          }
        ]
      }
    };
    this.getSkills();
  }



  modalOpenPrimary(modalPrimary, id) {
    this.skillsService.getSkill(id).subscribe({
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
    this.getSkills();
  }

  getSkills(): void {
    const params = this.getParams(this.page, this.pageSize, this.searchTitle);
    this.skillsService.getSkills(params).subscribe(
      {
        next: (data) => {
          console.log(data.length);
          const { content, totalElements } = data;
          this.SkillList = content;
          this.count = totalElements;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  deleteSkill(id: number): void {
    this.skillsService.deleteSkill(id)
      .subscribe(
        data => {
          console.log(data);
          this.getSkills();
        },
        error => console.log(error));
  }


  updateSkill(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.skillsService.updateSkill(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getSkills();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveSkill(): void {
    const data = {
      name: this.skill.name,
      description: this.skill.description
    }
    this.skillsService.createSkill(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getSkills();
        }, error: (err) => {
          console.error(err);
        }
      });
  }
}
