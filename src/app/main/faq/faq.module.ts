import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule
  ]
})
export class FaqModule { }
