import { Component, OnInit } from '@angular/core';
import { EntityDepartmentService } from 'app/main/company/services/entity-department.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'app/main/company/services/team.service';
import { Team } from 'app/main/company/models/team.model';
import { EntityDepartment } from 'app/main/company/models/entity-department.model';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.scss']
})
export class AllTeamsComponent implements OnInit {
  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: 
    { type: string; links: ({ name: string; isLink: boolean; link: string; } | 
      { name: string; isLink: boolean; link?: undefined; })[]; }; };

  constructor(private modalService: NgbModal, 
    private departmentservice : EntityDepartmentService,
    private teamService:TeamService) {}
  
  teams? : Team[];
  team: Team = {
    id:null,
    teamName: '',
    teamDesc:'',
    departement_id:null,
    employees:null
  }

  ngOnInit(): void 
  {
    this.getAllteams()
    this.getDepartments();

    this.contentHeader = {
      headerTitle: 'Company',
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
            name: 'Companies',
            isLink: true,
            link: '/'
          },
          {
            name: 'Team',
            isLink: true,
            link: '/'
          },
          {
            name: 'All teams',
            isLink: false
          }
        ]
      }
    };
  }

  // ------------ pagination & search ------------

  page = 1;
  count = 0;
  name = ''
  public pagePosition = 1;
  public totalPages=0;
  public chkBoxSelected = [];

  pageSize = 5;
  
  public pageChanged(event: any): void {
    this.page = event;
    this.getAllteams();
  }

  getParams(page: number, pageSize: number, name: string) {
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
    return params;
  }

  public getAllteams(): void {
    const params = {
      page : this.page-1,
      size : this.pageSize,
      name : this.name
    }
    this.teamService.getTeams(params).subscribe(
      {
        next: (response: any) => {
          const { content, totalElements, totalPages } = response;
          this.count = totalElements;
          this.totalPages = totalPages*10
          this.teams = content
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

  // ------------ Add Team ------------

  modalAdd(modalPrimaryAdd) {
    this.modalService.open(modalPrimaryAdd, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

  addTeam(): void {
    const data = {
       teamName: this.team.teamName,
       teamDesc:this.team.teamDesc,
       departement_id: this.idDepartment
     }
     this.teamService.createTeam(data).subscribe(
       {
         next: (data) => {
           this.ngOnInit();
         }, error: (err) => {
           console.error(err);
         }
       });
   }

   onChange(e: any) {
    this.idDepartment=e.target.value;
    console.log("id",this.idDepartment);
  }

  // ------------ Delete Team ------------ 
  
  private modal=null;
  private idTeam=0;

  modalOpenDanger(modalDanger, id:any) {
    this.idTeam=id;
    this.modal = this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }

  deleteTeam(){
    this.modal.close('Accept click');
    this.teamService.deleteTeam(this.idTeam).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err); 
      }
    })
  }

    // ------------ Update Team ------------

    departments?:EntityDepartment[];
    idDepartment:any;
    edit:Team = {
      id:null,
      teamName: '',
      teamDesc:'',
      employees:null,
      departement_id:null
    }

    updateTeam():void{
      const data = {
        id: this.edit.id,
        teamName: this.edit.teamName,
        teamDesc: this.edit.teamDesc,
        departement_id: this.idDepartment
      }
      this.teamService.updateTeam(data.id, data).subscribe(
        {
          next: (data) => {
            this.ngOnInit();
          }, error: (err) => {
            console.error(err);
          }
        });
    }
  
    modalEdit(modalPrimaryedit, id) {
      this.teamService.getTeam(id).subscribe({
        next: (data) => {
          this.edit = data;
          this.edit.departement_id=this.idDepartment
        }, error: (err) => {
          console.error(err);
        }
      });
      this.modalService.open(modalPrimaryedit, {
        centered: true,
        windowClass: 'modal modal-primary',
      });
    }
    
    // ------------ GET departments for select ------------
   
  getDepartments(): void {
    const params = {page:this.page-1, size:8, name:this.name};
    this.departmentservice.getDepartments(params).subscribe(
      { next: (data) => {
          const { content, totalElements } = data;
          this.departments = content;
          this.count = totalElements;
          this.idDepartment=this.departments[0].id;
        }, error: (err) => {
          console.error(err);
        }
      }
    );
  }

}
