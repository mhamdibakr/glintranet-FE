import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { DocumentService } from 'app/main/services/document.service';


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
  fileName: any;

  constructor(private modalService: NgbModal, private documentService : DocumentService) { }

  public contentHeader: object;
  public rows = [];
  public allDocs? : any[];

  public fbContent : ''


  selectedFiles : any
  uploadedFile  : any
  fileStatus = { status: '', requestType: '', percent: 0 };
  
  ngOnInit(): void 
  {
    this.getAllDocs()
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
    this.uploadedFile = this.selectedFiles.item(0)
    console.log(this.uploadedFile);
  }

  
  public showFileName(selectedFile : any)
  {
    let file = selectedFile.target.files[0]
    this.fileName = file.name;
    this.selectedFiles = selectedFile.target.files;
  }


  onUploadFile() : void
  {
        this.uploadedFile = this.selectedFiles.item(0)

    this.documentService.upload(this.uploadedFile,24,44).subscribe(
        event => {
          console.log(event)
        },
        (err : HttpErrorResponse) =>
        { console.log(err.message); }
      )
  }

  onDownLoadFile(fileId : number) : void
  {
    this.documentService.download(fileId).subscribe(
       (res : any) =>  console.log(res)
        
      
    )
  }

  getAllDocs() 
  {
    this.documentService.getDocuments().subscribe(
      (res : any[]) => {this.allDocs = res, console.log(this.allDocs);},
      
      (err : HttpErrorResponse) => console.log(err.message)
    )
  }


  private reportProgress(httpEvent: HttpEvent<string[] | Blob>) : void
  {
    switch(httpEvent.type)
    {
      case HttpEventType.UploadProgress :
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Uploading... ')
        break
      case HttpEventType.DownloadProgress :
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Downloading... ')
        break
      case HttpEventType.ResponseHeader :
        console.log('Header returned', httpEvent);
        break;
    }
  }

  private updateStatus(loaded: number, total: number, requestType: string): void {
    this.fileStatus.status = 'progress';
    this.fileStatus.requestType = requestType;
    this.fileStatus.percent = Math.round(100 * loaded / total);
  }

 

}
