import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ComponentsModule } from './components/components.module';
const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  
<<<<<<< HEAD
  

=======
>>>>>>> abc6e843b84b0ead49ff0fcae765674509ad0896
];

@NgModule({
  declarations: [
    
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
    ComponentsModule
  ],

  providers: []
})
export class CvtechModule { }
