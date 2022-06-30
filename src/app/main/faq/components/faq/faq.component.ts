import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Section } from 'app/main/models/section.model';
import { FaqService } from 'app/main/services/faq.service';
import { SectionService } from 'app/main/services/section.service';

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
  public sections: Section[];
  public SelectedSection = "All";

  constructor(
    private faqService: FaqService,
    private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.getData()
    this.getAllSections()

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
  getData(): void {
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

  getAllSections() {
    this.sectionService.getAllSections().subscribe({
      next: (data: any) => {
        this.sections = data;
        console.log(data);
      },
      error: (err) => console.error(err)

    })
  }

  getAllFAQsBySection(): void {
    var sec = this.sections.find(section => section.name == this.SelectedSection);
    
    this.faqService.getAllFAQsBySection(sec.id).subscribe(
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
