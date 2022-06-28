import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';


const routes: Routes = [
  { path: '', component: StatisticsComponent }
];



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule

  ]
})
export class StatisticsModule { }
