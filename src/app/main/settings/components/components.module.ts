import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { RoleComponent } from './role/role.component';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = 
[
  {
    path : 'roles',
    loadChildren : () => import('./role/role.module').then(m => m.RoleModule)  
  },
  {
    path : 'sections',
    loadChildren : () => import('./section/section.module').then(m => m.SectionModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
        CoreCommonModule,
        ContentHeaderModule,
        NgbModule,
        FormsModule,
  ]
})
export class ComponentsModule { }
