import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AllCampaign } from 'app/main/CvTech/models/all-campaign.model';
import { Availability } from 'app/main/CvTech/models/availability';
import { Education } from 'app/main/CvTech/models/education';
import { Skill } from 'app/main/CvTech/models/skill';
import { AllCampaignService } from 'app/main/CvTech/services/all-campaign.service';
import { EducationService } from 'app/main/CvTech/services/education.service';
import { SkillService } from 'app/main/CvTech/services/skill.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddCampaignComponent implements OnInit {
  // public
  public contentHeader: object;

  constructor(
    private AllCampaignService: AllCampaignService,
    private router: Router,
    private EducationService: EducationService,
    private SkillService: SkillService
  ) {
  }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Campaign',
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
            name: 'Add Campaign',
            isLink: false
          }
        ]
      }
    };

    this.getEducation()
    // 
    this.getSkill()
  }

  // ----- Add Campaign 
  Campaign : AllCampaign = {
    name: undefined,
    description: undefined,
    nbPositions: 0,
    closing_date: undefined,
    availablities: undefined,
    experiences: undefined,
    educations: undefined,
    situations: undefined,
    functions: undefined,
    skills: undefined,
    postulation: undefined
  };
  AddCampaign(): void {
    const data = {
      name: this.Campaign.name,
      description: this.Campaign.description,
      nbPositions: this.Campaign.nbPositions,
      closing_date: this.Campaign.closing_date
    }
    this.AllCampaignService.addCampaign(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.router.navigateByUrl("/cvtech/campaign/allcampaigns");
        }, error: (err) => {
          console.error(err);
        }
      });
  }

  // ------ Get Education
  public educationSelected;
  education : Education[] = []
  getEducation() {
    this.EducationService.getEducations().subscribe( 
      (edu: any) => 
      {
        this.education = edu.content;
        console.log(this.education);
      }
    )
  }

  // ------ Get Skill
  public skillSelected;
  skill : Skill[] = []
  getSkill() {
    this.SkillService.getSkills().subscribe( 
      (sk: any) => 
      {
        this.skill = sk.content;
        console.log(this.skill);
      }
    )
  }

  // ---------------------------------------------
  // Select Custom Tag
  selectAddTagMethod(name) {
    return { name: name, tag: true };
  }

  

}
