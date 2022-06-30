import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { Faq } from 'app/main/models/faq.model';
import { FaqService } from 'app/main/services/faq.service';
import { CustomOption } from 'ngx-quill';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss']
})
export class FaqDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private faqService: FaqService) { }

  public fad_id = this.route.snapshot.params["faqId"];
  public actualFaq: any;

  ngOnInit(): void {
    this.getData()
  }
  options: CustomOption[] = [
    {
      import: "attributors/style/size",
      whitelist: void 0
    }
  ];

  getData(): void {
    this.faqService.getFAQById(this.fad_id).subscribe(
      (res: any) => {
        this.actualFaq = res
        console.log(this.actualFaq);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public voteUp(id : number) : void
  {
    this.faqService.voteUp(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

  public voteDown(id : number) : void
  {
    this.faqService.voteDown(id).subscribe(
      () => {
        this.ngOnInit()
      }
    )
  }

}
