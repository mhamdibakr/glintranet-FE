import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { GlobalExperience } from '../models/global-experience.model';

@Component({
  selector: 'app-global-experience-management',
  templateUrl: './global-experience-management.component.html',
  styleUrls: ['./global-experience-management.component.scss']
})
export class GlobalExperienceManagementComponent implements OnInit {

  public contentHeader: object;

  GExperienceList: GlobalExperience[] = [];

  globalExperience: GlobalExperience = {
    id: null,
    name: '',
    description: '',
  }

  options: GlobalExperience = {
    id: null,
    name: '',
    description: ''
  }

  constructor(private modalService: NgbModal,private cvTechService: CvTechService) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Globale Experience Management',
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
            name: 'Globale Experience Management',
            isLink: false
          }
        ]
      }
    };
    this.getGExperience();
  }

  modalOpenPrimary(modalPrimary, id) {
    this.cvTechService.getGlobaleExperience(id).subscribe({
      next: (data) => {
        this.options = data;
      }, error: (err) => {
        console.error(err);
      }
    });
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }


  getGExperience(): void {
    this.cvTechService.getGlobaleExperiences().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.GExperienceList = data;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  deleteExperience(id: number): void {
    this.cvTechService.deleteGlobaleExperience(id)
      .subscribe(
        data => {
          console.log(data);
          this.getGExperience();
        },
        error => console.log(error));
  }


  updateExperience():void{
    const data = {
      id: this.options.id,
      name: this.options.name,
      description : this.options.description
    }
    this.cvTechService.updateGlobaleExperience(data.id,data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getGExperience();
        }, error: (err) => {
          console.error(err);
        }
      });
  }


  saveExperience(): void {
    const data = {
      name: this.globalExperience.name,
      description: this.globalExperience.description
    }
    this.cvTechService.createGlobaleExperience(data).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.getGExperience();
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
