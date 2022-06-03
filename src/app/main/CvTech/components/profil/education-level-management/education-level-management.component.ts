import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../../../models/education';
import { EducationService } from '../../../services/education.service';


@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {

  public contentHeader: object;
  data!: Education[];


  constructor(private modalService: NgbModal, private educationService : EducationService) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Educations Managment',
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
            name: 'CvTech',
            isLink: true,
            link: '/'
          },
          {
            name: 'Education Managment',
            isLink: false
          }
        ]
      }
    };
  }

   public getData() : void 
  {
      this.educationService.getEducations().subscribe(
      ( response : Education[]) =>
      {
        this.data = response,
        console.log(this.data)
      }
      )
  } 


  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

}
