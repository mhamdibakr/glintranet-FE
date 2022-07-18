import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';

const routes : Routes = 
[
  {
    path : '',
    component : RoleComponent
  }
]


@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class RoleModule { }
