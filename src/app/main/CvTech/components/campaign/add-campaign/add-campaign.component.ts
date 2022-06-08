import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { AllCampaign } from 'app/main/CvTech/models/all-campaign.model';
import { Availability } from 'app/main/CvTech/models/availability';
import { Education } from 'app/main/CvTech/models/education';
import { Skill } from 'app/main/CvTech/models/skill';
import { AllCampaignService } from 'app/main/CvTech/services/all-campaign.service';
import { EducationService } from 'app/main/CvTech/services/education.service';
import { SkillService } from 'app/main/CvTech/services/skill.service';
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

<<<<<<< HEAD
// import { ProfileService } from 'app/main/pages/profile/profile.service';

=======
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss'],
  encapsulation: ViewEncapsulation.None
})
<<<<<<< HEAD
export class AddCampaignComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public data: any;
  public toggleMenu = true;
  public Monthly = false;
  public toggleNavbarRef = false;
  public loadMoreRef = false;

  // private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {PricingService} _pricingService
   */
  constructor(
    //   private _pricingService: ProfileService, 
      private sanitizer: DomSanitizer) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Load More
   */
  loadMore() {
    this.loadMoreRef = !this.loadMoreRef;
    setTimeout(() => {
      this.loadMoreRef = !this.loadMoreRef;
    }, 2000);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // this._pricingService.onPricingChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   this.data = response;
    // });

    // content header
    // this.contentHeader = {
    //   headerTitle: 'CvTech',
    //   actionButton: true,
    //   breadcrumb: {
    //     type: '',
    //     links: [
    //       {
    //         name: 'Compaign',
    //         isLink: false
    //       }
    //     ]
    //   }
    // };
=======
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
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
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
<<<<<<< HEAD
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
=======

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

  

>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
}
