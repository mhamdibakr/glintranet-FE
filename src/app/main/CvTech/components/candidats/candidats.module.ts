import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
// import { AllCandidatsModule } from './all-candidats/all-candidats.module';
// import { UserDetailsComponent } from './user-details/user-details.component';

//Added by saad for form input validation ==> ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'addcandidat',
    component: AddCandidatComponent,
  },
  {
    path: 'allcandidats',
    loadChildren: () => import('./all-candidats/all-candidats.module').then(m => m.AllCandidatsModule)
  },

];

@NgModule({
  declarations: [
    AddCandidatComponent,
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
    // added by saad.......
    ReactiveFormsModule
  ],

  providers: []
})
export class CandidatsModule { }
