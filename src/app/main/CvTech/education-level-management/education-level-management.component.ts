import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CvTechService } from 'app/services/cv-tech.service';
import { Education } from '../models/education.model';

@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {

  public contentHeader: object;

  EducationList: Education[] = [];

  education: Education = {
    id: null,
    name: '',
    description: '',
  }

  options: Education = {
    id: null,
    name: '',
    description: ''
  }

  constructor(private modalService: NgbModal, private cvTechService: CvTechService) { }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Education Level Management',
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
            name: 'Education Level Management',
            isLink: false
          }
        ]
      }
    };
    this.getEducations();
  }

  getEducations(): void {
    this.cvTechService.getEducations().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.EducationList = data;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  deleteEducation(id: number): void {
    this.cvTechService.deleteEducation(id)
      .subscribe(
        data => {
          console.log(data);
          this.getEducations();
        },
        error => console.log(error));
  }

  modalOpenPrimary(modalPrimary, id) {
    this.cvTechService.getEducation(id).subscribe({
      next: (data) => {
        this.options = data;
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary',
    });
  }


  updateEducation(): void {
    const data = {
      id: this.options.id,
      name: this.options.name,
      description: this.options.description
    }
    this.cvTechService.updateEducation(data.id, data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getEducations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveEducation(): void {
    const data = {
      name: this.education.name,
      description: this.education.description
    }
    this.cvTechService.createEducation(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getEducations();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
