import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers.component';


const routes: Routes = [
  { path: '', component: AllusersComponent }
];

@NgModule({
  declarations: [
    AllusersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AllusersModule { }
