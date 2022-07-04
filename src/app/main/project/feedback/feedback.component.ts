import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FeedbackService} from 'app/main/services/feedback.service'



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {


  constructor(private route : ActivatedRoute, private fbService : FeedbackService,
                private modalService: NgbModal) { }

  public project_id = this.route.snapshot.params["projectId"];
  public data : any[]

  public fbContent : ''

  ngOnInit(): void 
  {
    this.getFeedBacks(this.project_id)
    console.log(this.project_id)
  }


  getFeedBacks(id : number)
  {
      this.fbService.getFeedBacks(id).subscribe(
        (res : any[]) => {
          this.data = res
          console.log(this.data)
        },
        (err : HttpErrorResponse) => {  console.log(err.message)  }
      )
  }

  getTypes()
  {
    this.fbService.getFeedBackTypes().subscribe(
      (res : any[]) => 
      {
        console.log(res)
      },
      (err : HttpErrorResponse) => {  console.log(err.message) }
    )
  }

  modalOpenForm(modalForm) {
    this.modalService.open(modalForm, {
      centered: true
    });
    this.getTypes()

  }

  show()
  {
    console.log(this.fbContent);
    
  }

}
