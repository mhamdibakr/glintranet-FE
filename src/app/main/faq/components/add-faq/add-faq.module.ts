import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFaqComponent } from './add-faq.component';


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
    RouterModule.forChild(routes)
  ]
})
export class AddFaqModule { }
