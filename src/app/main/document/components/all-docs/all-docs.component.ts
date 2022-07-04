import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  styleUrls: ['./all-docs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllDocsComponent implements OnInit {

  
  public SelectionType = SelectionType;
  public ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(private modalService: NgbModal) { }

  public contentHeader: object;
  public rows = [];

  public fbContent : ''

  ngOnInit(): void 
  {
    
    this.contentHeader = {
      headerTitle: 'Document',
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
            name: 'all documents',
            isLink: false
          }
        ]
      }
    };
  }

  modalOpenForm(modalForm) {
    this.modalService.open(modalForm, {
      centered: true
    });
  }

  show()
  {
    console.log(this.fbContent);
    
  }

}
