import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
<<<<<<< HEAD
=======
import { AddDepartmentComponent } from './add-department/add-department.component';
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896


const routes: Routes = 
[
<<<<<<< HEAD
    {
      path: '',
    //   loadChildren: () => import('./').then(m => m.)
    },
    {
    path: '',
    // component: ,
    }
=======
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'company-entity',
    loadChildren: () => import('./company-entity/company-entity.module').then(m => m.CompanyEntityModule)
  },
  {
  path: 'addDepartment',
  component: AddDepartmentComponent,
  }
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
];

@NgModule({
  declarations: [
<<<<<<< HEAD
=======
    AddDepartmentComponent
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
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
export class ComponentsModule { }
