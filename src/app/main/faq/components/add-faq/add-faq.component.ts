import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'app/main/models/employee.model';
import { Faq } from 'app/main/models/faq.model';
import { Section } from 'app/main/models/section.model';
import { Tag } from 'app/main/models/tag.model';
import { EmployeeService } from 'app/main/services/employee.service';
import { FaqService } from 'app/main/services/faq.service';
import { SectionService } from 'app/main/services/section.service';
import { TagService } from 'app/main/services/tag.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddFaqComponent implements OnInit {

  contentHeader: Object;
  public tags: Tag[];
  public sections: Section[];
  date = new Date(Date.now());
  public faq: Faq = {
    id: 0,
    content: undefined,
    description: undefined,
    postingDate: this.date.toISOString(),
    votes: 0,
    status: false,
    employee_id: 0,
    section_id: 0,
    tags: []
  };
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private tagService: TagService,
    private sectionService: SectionService,
    private faqService: FaqService
  ) { }

  public MultiDefaultSelected = [];
  public SectionSelected: Section = {
    id: 0,
    name: undefined,
    timestamp: undefined
  };
  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllTags();
    this.getAllSections();
    // content header
    this.contentHeader = {
      headerTitle: 'FAQ',
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
            name: 'All FAQs',
            isLink: true,
            link: '/faq/Allfaqs'
          },
          {
            name: 'Add FAQ',
            isLink: false
          }
        ]
      }
    };
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data: any) => {
        this.employees=data
      },
      error: (err) => console.error(err)

    })
  }

  getAllTags() {
    this.tagService.getAllTAgs().subscribe({
      next: (data: any) => {
        this.tags = data;
        console.log(data);
      },
      error: (err) => console.error(err)

    })
  }

  getAllSections() {
    this.sectionService.getAllSections().subscribe({
      next: (data: any) => {
        this.sections = data;
        console.log(data);
      },
      error: (err) => console.error(err)

    })
  }

  addFaq() {
    this.faq.employee_id=this.employees[1].id
    this.faq.section_id=this.SectionSelected.id
    this.faq.tags=this.MultiDefaultSelected;

    this.faqService.AddFAQ(this.faq).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err) => console.error(err)
    })
    
  }

}
