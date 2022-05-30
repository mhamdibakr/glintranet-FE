import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AllCampaignsComponent } from './all-campaigns/all-campaigns.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';

const routes: Routes = [
  {
    path: 'addcampaign',
    component: AddCampaignComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'allcampaigns',
    component: AllCampaignsComponent,
    // resolve: {
    //   Ias: InvoiceAddService
    // },
    //data: { animation: 'UsersComponent' }
  },
  {
    path: 'campaign-details/:campaign_id', 
    component: CampaignDetailsComponent
  }

];

@NgModule({
  declarations: [
    AddCampaignComponent,
    AllCampaignsComponent,
    CampaignDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule
  ],

  providers: []
})
export class CampaignModule { }
