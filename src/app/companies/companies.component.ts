import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './services/companies.service';

import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';

import { Company } from './company.model';
import { Position } from './position.model';

@Component({
  selector: 'app-companies',
  template:`
  <div class="container">
    <div class="ui-g">
      <div class="ui-g-6">
        <h1>Companies</h1>
        <app-companies-list [companies$]="companies$" (selectedCompany)="onSelectCompany($event)"></app-companies-list>
      </div>
      <div class="ui-g-6">
        <h1>Positions</h1>
        <app-positions-list [positionsList$]="positionsList$"></app-positions-list>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<Company[]>;
  positionsList$: Observable<Position[]>;
  companyId: number;

  constructor(private companyService: CompaniesService) { }

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies();
    this.positionsList$ = this.companyService.getPositions();
    
  }

  onSelectCompany(company){
    if(company.id === this.companyId){
      this.positionsList$ = this.companyService.getPositions();
      this.companyId = null;
    } else {
      this.positionsList$ = this.companyService.getPositions(company.id);
      this.companyId = company.id;
    }
  }

}
