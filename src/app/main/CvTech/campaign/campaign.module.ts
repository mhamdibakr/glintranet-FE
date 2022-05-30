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
import { AddCompaignComponent } from './add-compaign/add-compaign.component';

const routes: Routes = [
  {
    path: 'addcampaign',
    component: AddCompaignComponent,
  },
  {
    path: 'allcampaigns',
    loadChildren: () => import('./all-campaigns/all-campaigns.module').then(m => m.AllCampaignModule)
  },
];

@NgModule({
  declarations: [
    AddCompaignComponent,
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
