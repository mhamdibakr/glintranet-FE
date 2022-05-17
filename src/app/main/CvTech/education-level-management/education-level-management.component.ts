import { Component, OnInit } from '@angular/core';
import { CoreTranslationService } from '@core/services/translation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CvTechService } from 'app/services/cv-tech.service';
import { takeUntil } from 'rxjs/operators';
import { Education } from '../models/education.model';
import { DatatablesService } from './Datatables.service';

@Component({
  selector: 'app-education-level-management',
  templateUrl: './education-level-management.component.html',
  styleUrls: ['./education-level-management.component.scss']
})
export class EducationLevelManagementComponent implements OnInit {

  public contentHeader: object;
  EducationList: Education[] = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  //public SelectionType = SelectionType;

  /**
   * Method Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.EducationList.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }

  constructor(private modalService: NgbModal, private cvTechService: CvTechService,private _datatablesService: DatatablesService, private _coreTranslationService: CoreTranslationService) { }

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
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this.cvTechService.getEducations())).subscribe(response => {
      //this.kitchenSinkRows = this.rows;
      //this.exportCSVData = this.rows;
    });
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

  modalOpenPrimary(modalPrimary) {
    this.modalService.open(modalPrimary, {
      centered: true,
      windowClass: 'modal modal-primary'
    });
  }

}
