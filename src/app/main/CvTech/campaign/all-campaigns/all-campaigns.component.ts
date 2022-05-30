import { Component, OnInit } from '@angular/core';
import { AllCampaignService } from '../../services/all-campaign.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllCampaign } from '../../models/all-campaign.model';

@Component({
  selector: 'app-all-campaigns',
  templateUrl: './all-campaigns.component.html',
  styleUrls: ['./all-campaigns.component.scss']
})
export class AllCampaignsComponent implements OnInit {

  public pageBasicText = 3;
  
  //Campaigns?: AllCampaign[];

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  public chkBoxSelected = [];

  constructor(private modalService: NgbModal, private AllCampaignService : AllCampaignService) {}

  ngOnInit(): void 
  {
    this.getData()
    
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
            name: 'All Campaigns',
            isLink: false
          }
        ]
      }
    };
  }

  Campains? : AllCampaign[];
  public getData() : void 
  {
      this.AllCampaignService.getAllCampaign().subscribe(
      ( response : any) =>
        {
//          console.log("cc flifla")
//          console.log("this.Campains : " + this.Campains)
          this.Campains = response.content
//          console.log("===> ", this.Campains)
        }
      )
  } 


  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }
}
