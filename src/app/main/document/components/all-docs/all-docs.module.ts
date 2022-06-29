import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllDocsComponent } from './all-docs.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { UploadDocComponent } from '../upload-doc/upload-doc.component';


const routes: Routes = [
  { 
    path: 'Alldocs',
    component: AllDocsComponent
  },
  {
    path: 'Adddoc',
    component: UploadDocComponent
  }
];

@NgModule({
  declarations: [
    AllDocsComponent,UploadDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CoreCommonModule,
    NgbModule,
    CardSnippetModule
  ]
})
export class AllDocsModule { }
