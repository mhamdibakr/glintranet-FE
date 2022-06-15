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

public pagePosition = 2;
public totalPages=0;
contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };
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
    headerTitle: 'Global Experiences',
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
          name: 'Global Experience',
          isLink: false
        }
      ]
    }
  }
}

public count = 0;
public page = 1;
public name = '';
public description = '';


public pageChanged(event: any): void {
  this.page = event;
  console.log(event);
  this.getData();
}


  getParams(page: number, pageSize: number, name: string, description: string) {
    let params: any = {};
    if (page) {
      params['page'] = page - 1;
    }
    if (pageSize) {
      params['size'] = pageSize;
    }
    if (name) {
      params['name'] = name;
    }
    if (description) {
      params['description'] = description;
    }
  }

  getData(): void {
    const params = {
      page : this.page-1,
      size : 3,
      name : this.name,
      description : this.description
    }
    
    this.situationService.getAllPagination(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages*10
          this.data = response.content
          console.log(this.data);
          
        }, error: (err) => {
          console.error(err);
        }
      }
    );
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
