import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(company){
    console.log(company.form.value);
  }

}
