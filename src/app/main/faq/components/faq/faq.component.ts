import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FaqService } from 'app/main/services/faq.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FAQService } from './faq.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {
  // public
  public contentHeader: object;
  public data: any;
  public searchText: string;
  public AllFaqs?: any[];

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FAQService} _faqService
   */
  constructor(private _faqService: FAQService, private faqService: FaqService) {
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Changes
   */
  ngOnInit(): void {
    this.getData()

    this._faqService.onFaqsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    // content header
    this.contentHeader = {
      headerTitle: 'FAQ',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'All FAQs',
            isLink: false
          }
        ]
      }
    };
  }

  count = 0;
  public getData(): void {
    this.faqService.getAllFAQs().subscribe(
      (res: any) => {
        this.AllFaqs = res;
        this.count = this.AllFaqs.length;
        console.log(this.AllFaqs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
