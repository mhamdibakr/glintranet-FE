import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';

const routes: Routes = [
  {
    path: 'addcampaign',
    component: AddCampaignComponent,
  },
  {
    path: 'allcampaigns', 
    loadChildren: () => import('./all-campaigns/all-campaigns.module').then(m => m.AllCampaignModule)
  },
];

@NgModule({
  declarations: [
    AddCampaignComponent,
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
