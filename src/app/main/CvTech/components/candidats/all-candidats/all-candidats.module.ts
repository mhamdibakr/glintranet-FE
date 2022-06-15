import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CandidatDetailsComponent } from './candidat-details/candidat-details.component';
import { AllCandidatsComponent } from './all-candidats.component';

const routes: Routes = [
  {
    path: '',
    component: AllCandidatsComponent,
  },
  {
    path: 'candidat-details/:candidat_id', 
    component: CandidatDetailsComponent
  }
];

@NgModule({
  declarations: [
    CandidatDetailsComponent,
    AllCandidatsComponent
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
export class AllCandidatsModule { }
