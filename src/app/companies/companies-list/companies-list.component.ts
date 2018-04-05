import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Company } from '../company.model';

@Component({
  selector: 'app-companies-list',
  template: `
  <p-card styleClass="styleCard" *ngFor="let company of companies$ | async" [style]="{'margin-bottom':'1em', 'cursor':'pointer', 'background-color': company === activeCompany ? '#275ae469': null}" [title]="company.companyName" (click)="selectCompany(company)" [class.activeCompany]="company === activeCompany">
    <ul class="companyDetails">
      <li>{{ company.headquarter.address }}</li>
      <li>{{ company.headquarter.city }}, {{ company.headquarter.postal }}</li>
      <li>{{ company.headquarter.phone }}</li>
    </ul>
  </p-card>
  `,
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  @Input('companies$') companies$: Observable<Company>;
  @Output() selectedCompany = new EventEmitter();
  activeCompany:Company;

  constructor() { }

  ngOnInit() {
  }

  selectCompany(company){
    this.activeCompany = company;
    this.selectedCompany.emit(company);
  }

}
