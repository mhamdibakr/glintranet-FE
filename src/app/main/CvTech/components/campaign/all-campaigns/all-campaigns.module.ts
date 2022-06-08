import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { AllCampaignsComponent } from './all-campaigns.component';
import { CoreCardModule } from '@core/components/core-card/core-card.module';

const routes: Routes = [
  {
    path: '',
    component: AllCampaignsComponent,
  },
  {
    path: 'campaign-details/:campaign_id', 
    component: CampaignDetailsComponent
  }
];

@NgModule({
  declarations: [
    CampaignDetailsComponent,
    AllCampaignsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
    CoreCardModule
  ],

  providers: []
})
export class AllCampaignModule { }
