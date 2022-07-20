import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FaqComponent } from './faq.component';
import { FAQService } from './faq.service';
import { FaqDetailsComponent } from './faq-details/faq-details.component';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCardModule } from '@core/components/core-card/core-card.module';


const routes: Routes = [
  {
    path: 'Allfaqs',
    component: FaqComponent
  },
  {
    path: 'faq-details/:faqId',
    component: FaqDetailsComponent
  }
];

@NgModule({
  declarations: [FaqComponent, FaqDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    CoreCommonModule,
    CardSnippetModule,
    ContentHeaderModule,
    CoreCardModule
  ],

  providers: [FAQService]
})
export class FaqModule { }
