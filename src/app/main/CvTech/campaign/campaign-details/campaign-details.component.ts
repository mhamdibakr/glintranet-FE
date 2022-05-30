import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCampaign } from '../../models/all-campaign.model';
import { AllCampaignService } from '../../services/all-campaign.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private AllCampaignService: AllCampaignService, private modalService: NgbModal ) { }
  
  id:number= this.route.snapshot.params["campaign_id"];
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  Campaign?: AllCampaign;

  async getCampaign() {
    await this.AllCampaignService.getbyid(this.id).subscribe( 
      {
        next: (response: any) => {
          this.Campaign = response
          console.log(this.Campaign)
        },
        error: (err) => {
          console.error(err);
        }
      }
    );

  }

  ngOnInit(): void {
    // //
    this.getCampaign();
    // // 
    this.contentHeader = {
      headerTitle: 'Campaign Details',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/home'
          },
          {
            name: 'CvTech',
            isLink: true,
            link: '/'
          },
          {
            name: 'All Campaigns',
            isLink: true,
            link: '/allcampaigns'
          },
          {
            name: 'Campaigns Details',
            isLink: false,
            link: '/'
          }
        ]
      }
    };
  }
  


}
