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

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
  
  constructor(private modalService: NgbModal, private AllCampaignService : AllCampaignService) {}

  ngOnInit(): void 
  {
    this.getAllCampaigns()
    //

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

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  // -------------------- pagination 
  page = 1;
  count = 0;
  pageSize = 4;
  name = ''
  public pagePosition = 1;
  public totalPages=0;
  

  public pageChanged(event: any): void {
    this.page = event;
    this.getAllCampaigns();
  }

  getParams(page: number, pageSize: number, name: string) {
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

    return params;
  }

  public chkBoxSelected = [];
  Campains? : AllCampaign[];

  getAllCampaigns(): void {
    const params = {
      page : this.page-1,
      size : 3,
      name : this.name
    }
    this.AllCampaignService.getAllPagination(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.Campains = response.content
          this.count = totalElements;
          this.totalPages = totalPages*10
          
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------------- delete campaign 
  deleteCampaign(id: number){
    this.AllCampaignService.DeleteCampaignById(id).subscribe({
      next: () => {
        console.log("raaa9 , deleted !", id);
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }
}
