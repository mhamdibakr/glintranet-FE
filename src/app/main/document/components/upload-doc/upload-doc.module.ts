import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadDocComponent } from './upload-doc.component';


const routes: Routes = [
  {
    path: 'Adddoc',
    component: UploadDocComponent
  }
];

@NgModule({
  declarations: [
    UploadDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UploadDocModule { }
