import { HttpErrorResponse } from '@angular/common/http';
import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentSituation } from 'app/main/CvTech/models/current-situation';
import { CurrentSituationService } from 'app/main/CvTech/services/current-situation.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements OnInit 
{
  public contentHeader: object;
  public data?: CurrentSituation[]
  public situation : CurrentSituation = { name : '', description : ''}

  situationForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  })


  constructor(private situationService : CurrentSituationService) { }

  ngOnInit(): void {
    this.getData()
    this.contentHeader = {
      headerTitle: 'Situation',
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
            name: 'Profil',
            isLink: true,
            link: '/'
          },
          {
            name: 'Situation',
            isLink: false
          }
        ]
      }
    };
  }

  getData() : void
  {
    this.situationService.getSituations().subscribe(
      (response : any) => { this.data = response.content  },
      (error : HttpErrorResponse) => { alert(error.message) }
    )
  }

  addData() : void 
  {
    this.situation = this.situationForm.value
    const situationData = {
      name : this.situation.name,
      description : this.situation.description
    }
    this.situationService.addSituation(situationData).subscribe(
      (response : any) => { console.log(response), window.location.reload() },
      (error : HttpErrorResponse) => { alert(error.message)}
    )

  }

  deleteData(id : number)
  {
    this.situationService.deleteSituation(id).subscribe(
      () => { window.location.reload() },
      (error : HttpErrorResponse) => { alert(error.message) }
    )
  }
}
