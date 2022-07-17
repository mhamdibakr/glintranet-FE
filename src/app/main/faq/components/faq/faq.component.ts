import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'app/auth/service/authentication.service';
import { Faq } from 'app/main/models/faq.model';
import { Section } from 'app/main/models/section.model';
import { FaqService } from 'app/main/services/faq.service';
import { SectionService } from 'app/main/services/section.service';
import { DateMethod } from '../../../date-method'
import { NgForm } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {
  // public
  //public key : string
  public contentHeader: object;
  public data: any;
  public date1 : any;
  public count = 0;
  public searchText: string;
  public AllFaqs: any[];
  public sections: Section[];
  public SelectedSection = "All";

  constructor(
    private dateFormat : DateMethod,
    private faqService: FaqService,
    private sectionService: SectionService,
    private authService : AuthenticationService) {
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

  getData(): void {
    this.faqService.getAllFAQs().subscribe(
      (res: any) => 
      {
        this.AllFaqs = res;
        this.count = this.AllFaqs.length;
        console.log(this.AllFaqs);
        console.log(  this.dateFormat.showMSG("2022/07/05"))
      
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

    
    console.log(sec.name);
    
  }

  public searchFAQ(key : string) : void 
  {
      console.log(key);
      const results : any[] = []
      for(const faq of this.AllFaqs)
      {
        if(faq.content.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
           faq.description.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        { results.push(faq) }
      }
      this.AllFaqs = results
      this.count = results.length
      console.log(this.AllFaqs);

      if (results.length === 0 || !key) {
        this.getData();
      }
     /* 
      if (results.length === 0 || !key)
      {
        this.getData()
      }*/ 
  }

  public DateFormat(time: string|number|Date) {

    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, 'seconds', 1], // 60
      [120, '1 minute ago', 'Dans 1 minute'], // 60*2
      [3600, 'minutes', 60], // 60*60, 60
      [7200, '1 hour', 'Dans 1 heure'], // 60*60*2
      [86400, 'hours', 3600], // 60*60*24, 60*60
      [172800, 'yesterday', 'Demain'], // 60*60*24*2
      [604800, 'days', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'last week', 'La semaine prochaine'], // 60*60*24*7*4*2
      [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'last month', 'le mois prochain'], // 60*60*24*7*4*2
      [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'last year', 'L\'année prochaine'], // 60*60*24*7*4*12*2
      [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    ];
    var seconds = (+new Date() - Number(time)) / 1000,
      token = 'il y\'a',
      list_choice = 1;

    if (seconds == 0) {
      return 'Maintenant'
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'Dans';
      list_choice = 2;
    }
    var i = 0,
      format;
    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return token + ' ' + Math.floor(seconds / format[2]) + ' ' + format[1];
      }
      console.log("res : "+time); return time;
  }


}
