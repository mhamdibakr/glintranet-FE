import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Availability } from 'app/main/CvTech/models/availability';
import { AvailabiltyService } from 'app/main/CvTech/services/availabilty.service';

@Component({
  selector: 'app-availabilty',
  templateUrl: './availabilty.component.html',
  styleUrls: ['./availabilty.component.scss']
})
export class AvailabiltyComponent implements OnInit {
  data?: Availability[]
  availability : Availability = { name : '', description : ''}

  availabilityForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl('')
  })
  constructor(private availabilityService : AvailabiltyService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() : void
  {
    this.availabilityService.getAvailabilties().subscribe(
      (response : any) => { this.data = response.content ,console.log(response) }
    )
  }

  addData() : void 
  {
    this.availability = this.availabilityForm.value
    const availabilityData = {
      name : this.availability.name,
      description : this.availability.description
    }
    
    this.availabilityService.addAvailability(availabilityData).subscribe(
      (response : any) => { window.location.reload() },
      (error : HttpErrorResponse) => { alert(error.message)}
    )
  }

  deleteData(id : number) : void 
  {
   this.availabilityService.deleteAvailability(id).subscribe(
     () => {  window.location.reload() },
     (error : HttpErrorResponse) => { alert(error.message)}
   )
    
  }

}
