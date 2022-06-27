import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllDocsComponent } from './all-docs.component';


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
    RouterModule.forChild(routes)
  ]
})
export class AllDocsModule { }
