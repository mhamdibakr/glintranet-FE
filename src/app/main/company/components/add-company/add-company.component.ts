import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  contentHeader: { headerTitle: string; actionButton: boolean; breadcrumb: { type: string; links: ({ name: string; isLink: boolean; link: string; } | { name: string; isLink: boolean; link?: undefined; })[]; }; };

  company: Company = {
    id:null,
    name: '',
    address: '',
    email:'',
    phoneNumber:'',
    webSite:'',
    image:'',
    entities:[]
  }

  constructor(private companyservice:CompanyService) { }


  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: 'Companies',
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
            name: 'Company',
            isLink: true,
            link: '/'
          },
          {
            name: 'Add Company',
            isLink: false
          }
        ]
      }
    };
  }

  saveCompany(): void {
    const data = {
      name: this.company.name,
      address: this.company.address,
      email: this.company.email,
      phoneNumber: this.company.phoneNumber,
      webSite: this.company.webSite
    }
    this.companyservice.createCompany(data).subscribe(
      {
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.error(err);
        }
      });
  }

}
