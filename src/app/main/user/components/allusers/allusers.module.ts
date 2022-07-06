import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  { path: '', component: AllusersComponent },
  { 
    path: 'UserDetails/:userId',
    loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)
  }
];

@NgModule({
  declarations: [
    AllusersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    FormsModule,
    NgxDatatableModule
    
  ]
})
export class AllusersModule { }
