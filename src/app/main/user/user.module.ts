import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserDetailsModule } from './components/allusers/user-details/user-details.module';
import { AllusersModule } from './components/allusers/allusers.module';


const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  }
];

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    FormsModule,
  ]
})
export class UserModule { }
