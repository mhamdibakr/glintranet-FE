import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllDocsComponent } from './all-docs.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreCommonModule } from '@core/common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';


const routes: Routes = [
  { 
    path: 'Alldocs',
    component: AllDocsComponent
  }
];

@NgModule({
  declarations: [
    AllDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    CoreCommonModule,
    NgbModule,
    CardSnippetModule,
    ContentHeaderModule
  ]
})
export class AllDocsModule { }
