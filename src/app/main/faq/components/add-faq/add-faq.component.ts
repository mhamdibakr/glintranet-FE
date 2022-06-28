import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFaqComponent implements OnInit {

  constructor() { }

  public MultiDefaultSelected = [{ name: 'Karyn Wright' }];
  public MultiDefault = [
    { name: 'Javascript' },
    { name: 'Angular' },
    { name: 'Typescript' },
    { name: 'Python' }
  ];
  ngOnInit(): void {
  }

}
