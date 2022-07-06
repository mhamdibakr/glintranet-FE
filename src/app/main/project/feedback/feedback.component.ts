import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Feedback } from 'app/main/models/feedback.model';
import { FeedbackService } from 'app/main/services/feedback.service'



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  contentHeader: Object

  private currentUserSubject: any;
  public currentUser: any;

  constructor(private route: ActivatedRoute, private fbService: FeedbackService,
    private modalService: NgbModal) {
    this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject;
  }

  public project_id = this.route.snapshot.params["projectId"];
  public feedBacks: any[]
  public feedBackTypes: any[]

  public feedBack: Feedback = {
    id: 0,
    content: undefined,
    timestamp: undefined,
    employee: undefined,
    type: undefined
  }
  feedBackReq = {
    content: "",
    employee_id: 24,
    project_id: this.project_id,
    type_id: 0
  }

  ngOnInit(): void {
    this.getFeedBacks(this.project_id);
    this.getTypes();

    this.contentHeader = {
      headerTitle: 'Feedback',
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
            name: 'All Projects',
            isLink: true,
            link: '/projects'
          },
          {
            name: 'All FeedBacks',
            isLink: false
          }
        ]
      }
    };
  }


  getFeedBacks(id: number) {
    this.fbService.getFeedBacks(id).subscribe(
      (res: any[]) => {
        this.feedBacks = res
        console.log(this.feedBacks)
      },
      (err: HttpErrorResponse) => { console.log(err.message) }
    )
  }

  getTypes() {
    this.fbService.getFeedBackTypes().subscribe(
      (res: any[]) => {
        this.feedBackTypes = res
        console.log(res)
      },
      (err: HttpErrorResponse) => { console.log(err.message) }
    )
  }

  model: NgbModalRef
  modalOpenForm(modalForm) {
    this.model = this.modalService.open(modalForm, {
      centered: true
    });
  }

  addFeedBack() {
    this.feedBackReq.employee_id=this.currentUser.id;
    this.fbService.addFeedBack(this.feedBackReq).subscribe({
      next: (res: any) => {
        console.log(res);
        this.model.close();
        this.feedBackReq.content = "";
        this.feedBackReq.type_id = 0;
        this.ngOnInit();
      },
      error: (err) => console.error(err),
    })
  }

}
