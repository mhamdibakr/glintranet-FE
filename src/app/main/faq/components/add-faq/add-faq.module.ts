import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFaqComponent } from './add-faq.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreCommonModule } from '@core/common.module';


const routes: Routes = [
  { 
    path: 'Addfaq',
    component: AddFaqComponent 
  }
];

@NgModule({
  declarations: [
    AddFaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule,
    NgSelectModule
  ]
})
export class AddFaqModule { }
