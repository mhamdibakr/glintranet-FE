import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCampaign } from '../../../models/all-campaign.model';
import { AllCampaignService } from '../../../services/all-campaign.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Candidat } from '../../../models/candidat.model';
import { CandidatService } from '../../../services/candidat.service';
import { Postulation } from '../../../models/postulation.model';
import { PostulationResponse } from '../../../models/postulation-response.model';
import { PostulationService } from '../../../services/postulation.service';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private AllCampaignService: AllCampaignService,
    private modalService: NgbModal,
    private AllCandidatService: CandidatService,
    private PostulationService: PostulationService,
  ) { }

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };


  // ------- Get All Candidats ------- //
  
  Candidats?: Candidat[];
  Postulations?: PostulationResponse[];
  postulatedCandidats: Candidat[] = [];

  public getCandidats() {
    this.AllCandidatService.getAllCandidat().subscribe(
      (response: any) => {
        this.Candidats = response.content
        this.Postulations.forEach(p => {
          this.postulatedCandidats.push(p.candidat);
        })
        
        // console.log("allCandidats",this.Candidats);
        //console.log("postulatedCandidats",this.postulatedCandidats);
        
        this.postulatedCandidats.forEach(candid => {
          this.Candidats.splice(this.Candidats.findIndex(candidat => candidat.id === candid.id), 1);
        });
        //console.log("Postulations",this.Postulations);
      }
    )
  }

  private candidatIds = []
  // recupere les candidat selectionee 
  public onCheckboxChange(event: any): void {
    const idExistInCandidatIds = this.candidatIds.includes(event.target.id)
    if (event.target.checked && !idExistInCandidatIds) {

      this.candidatIds.push(event.target.id);

    } else {
      this.candidatIds.forEach((id, index) => {
        event.target.id === id ? this.candidatIds.splice(index, 1) : null;
      })
    }
  }


  // modal Open Small
  modalOpenSM(modalSM) {
    this.modalService.open(modalSM, {
      centered: true,
      size: 'xl'
    });
  }


  // ------- Get One Campaign By Id ------- //
  campainId: number = this.route.snapshot.params["campaign_id"];
  Campaign?: AllCampaign;
  getCampaign() {
     this.AllCampaignService.getbyid(this.campainId).subscribe(
      {
        next: (response: any) => {
          this.Campaign = response;
          this.Postulations = response.postulation;
        },
        error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------- Postulation ---------- //
  postulation: Postulation;
  postulatCandidat(): void {
    console.log(this.candidatIds);
    this.candidatIds.forEach(id => {
      const data = {
        date_postulation: Date.now(),
        status: '',
        candidat_id: Number.parseInt(id),
        campaign_id: this.campainId,
      };

      this.PostulationService.post(data).subscribe({
        next: (data) => {
          console.log(data);
          document.getElementById('close-model')?.click();
          this.ngOnInit();
        },
        error: (err) => {
          console.error(err);
        },
      });

    })
  }

  // ---------- Deelete Selected Candidats ------------ //
  deleteSelectedCandidat(id: number) {
    this.PostulationService.deletebyid(id).subscribe(
      {
        next: (data) => {
          console.log("deleted ! ",id);
          this.ngOnInit();
        }, 
        error: (err) => {
          console.error(err);
        }
      }
    );
  }


  ngOnInit(): void {
    this.getCampaign();
    // //
    this.getCandidats();
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
            link: '/cvtech/campaign/allcampaigns'
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
