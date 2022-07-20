import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FaqDetailsComponent } from './faq-details.component';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';


const routes: Routes = [
  { path: '', component: FaqDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardSnippetModule,
    RouterModule.forChild(routes)
  ]
})
export class FaqDetailsModule { }
