import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';


const routes: Routes = [
  { path: '', component: ProjectComponent }
];

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
