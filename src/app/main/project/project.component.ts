import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public data : any[];
  public count : number;
  
  constructor(private projectService : ProjectService) { }

  ngOnInit(): void 
  {
    this.getProjects()
  }


  public getProjects() 
  {
    this.projectService.getAllProjects().subscribe(
      (res : any[]) =>
      {
          this.data = res,
          this.count = this.data.length
          console.log(this.data)
         
          
          
      },
      (err : Error) => {  alert(err.message)  }
    )
  }

}
