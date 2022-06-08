import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../../../models/education';
import { EducationService } from '../../../services/education.service';


@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {
  public education : Education = {name: '', description :''}
  public contentHeader: object;
  public data!: Education[];

  educationForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  })


  constructor(private modalService: NgbModal, private educationService : EducationService) {}

 
  ngOnInit(): void {
    this.getData()
    
  }

  public getData() : void 
  {
      this.educationService.getEducations().subscribe(
      ( response : any) => { this.data = response.content },
      (error : HttpErrorResponse) => { console.log(error.message) }
      )
  } 

  public addData() : void 
  {
    this.education = this.educationForm.value
    const educationData = 
    {
      name : this.education.name,
      description : this.education.description
    }
    this.educationService.addEducation(educationData).subscribe(
      (response : any) => { console.log(response), window.location.reload() },
      (error : HttpErrorResponse) => {alert(error.message)}
    )
    console.log(educationData)
  }


  private modal=null;
  private id=0;

  modalOpenDanger(modalDanger, id:any) {
    this.id=id
    this.modal = this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }

  


  public deleteData() : void 
  {
   
    this.modal.close('Accept click')
    window.location.reload();
    console.log(this.id)
    this.educationService.deleteEducation(this.id).subscribe(
      () => { window.location.reload() },
      (error : HttpErrorResponse) => {  alert(error.message) }

    )
  }

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

 

}
