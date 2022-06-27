import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser.component';


const routes: Routes = [
  { path: '', component: AdduserComponent }
];

@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdduserModule { }
