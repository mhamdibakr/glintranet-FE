import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public data: any[];
  public count: number;
  contentHeader: Object;
  public projectReq: Project = {
    projectName: undefined,
    projectDesc: undefined
  }

  constructor(private projectService: ProjectService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getProjects()
    
    this.contentHeader = {
      headerTitle: 'Project',
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
            isLink: false,
          }
        ]
      }
    };
  }


  public getProjects() {
    this.projectService.getAllProjects().subscribe(
      (res: any) => {
        this.data = res,
          this.count = this.data.length
        console.log(this.data)
      },
      (err: Error) => { alert(err.message) }
    )
  }

  model: NgbModalRef
  modalOpenForm(modalForm) {
    this.model = this.modalService.open(modalForm, {
      centered: true
    });
  }

  addProject() {
    console.log(this.projectReq);
    this.projectService.addProject(this.projectReq).subscribe({
      next: (res) => {
        console.log(res);
        this.model.close();
        this.ngOnInit();
        this.projectReq.projectDesc="";
        this.projectReq.projectName="";
      },
      error: (err) => console.error(err)
    })
  }
}
