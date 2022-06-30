import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-datatable';
import { Comment } from 'app/main/models/comment.model';
import { Faq } from 'app/main/models/faq.model';
import { CommentService } from 'app/main/services/comment.service';
import { FaqService } from 'app/main/services/faq.service';
import { CustomOption } from 'ngx-quill';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.scss']
})
export class FaqDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private faqService: FaqService,
    private commentService: CommentService
  ) { }

  public fad_id = this.route.snapshot.params["faqId"];
  public actualFaq: any;
  date = new Date(Date.now());
  public comment: Comment = {
    content: undefined,
    emp_Id: 0,
    faq_Id: Number.parseInt(this.fad_id)
  }

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
  addComment() {
    this.comment.emp_Id = this.actualFaq.employee.id;
    console.log(this.comment);

    this.commentService.addComment(this.comment).subscribe({
      next: (res: any) => {
        console.log(res);
        this.ngOnInit()
      },
      error: (err) => console.error(err)
    })
  }

}
