import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { DocumentService } from 'app/main/services/document.service';
import { error } from 'console';
import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';
import { types } from 'util';


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
  currentUserSubject: any;
  currentUser: any;
  doc: any;

  constructor(private modalService: NgbModal, private documentService: DocumentService) {
    this.currentUserSubject = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject;
  }

  public contentHeader: object;
  public rows = [];
  public allDocs?: any[];
  public typeId: any;
  public types: any;
  public fbContent: ''


  selectedFiles: any
  uploadedFile: any
  fileStatus = { status: '', requestType: '', percent: 0 };

  ngOnInit(): void {
    this.getAllDocs();
    this.getTypes();

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

  modal = null
  modalOpenForm(modalForm) {
    this.modal = this.modalService.open(modalForm, {
      centered: true
    });
  }

  show() {
    this.uploadedFile = this.selectedFiles.item(0)
    console.log(this.uploadedFile);
  }


  public showFileName(selectedFile: any) {
    let file = selectedFile.target.files[0]
    this.fileName = file.name;
    this.selectedFiles = selectedFile.target.files;
  }

  getTypes() {
    this.documentService.getTypes().subscribe({
      next: (data) => this.types = data,
      error: (err) => console.error(err)
    })
  }

  onUploadFile(): void {
    this.uploadedFile = this.selectedFiles.item(0)
    console.log(this.typeId);

    this.documentService.upload(this.uploadedFile, this.currentUser.id, this.typeId).subscribe(
      event => {
        this.modal.close()
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        });
        this.ngOnInit()
      },
      (err: HttpErrorResponse) => { console.log(err.message); }
    )
  }

  onDownLoadFile(fileId: number): void {


    this.documentService.getDocument(fileId).subscribe(
      (response: any) => { this.doc = response , this.down(fileId, response.documentName)},
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  down(id : number, content : string) : void 
  {
    
    this.documentService.download(id).subscribe((response: any) => {
      let blob: any = new Blob([response], { type: 'text/json; charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      //window.open(url);
      saveAs(blob, content);
    }), (error: any) => console.log('Error downloading the file'),
      () => console.info('File downloaded successfully');
  }

  getAllDocs() {
    this.documentService.getDocuments().subscribe(
      (res: any[]) => { this.allDocs = res, console.log(this.allDocs); },

      (err: HttpErrorResponse) => console.log(err.message)
    )
  }


  private reportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
    switch (httpEvent.type) {
      case HttpEventType.UploadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Uploading... ')
        break
      case HttpEventType.DownloadProgress:
        this.updateStatus(httpEvent.loaded, httpEvent.total, 'Downloading... ')
        break
      case HttpEventType.ResponseHeader:
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
