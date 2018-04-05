import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Position } from '../position.model';

@Component({
  selector: 'app-positions-list',
  template: `
  <p-card styleClass="styleCard" *ngFor="let position of positionsList$ | async" [style]="{'margin-bottom':'1em', 'cursor':'pointer'}" [title]="position.position">
    <ul class="positionDetails">
      <li><strong>{{ position.location }}</strong></li>
      <li><em>{{ position.applied ? 'You already applied for this position' : 'You have not applied for this position' }}</em></li>
      <app-task-list [position]="position"></app-task-list>
    </ul>
  </p-card>
  `,
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {
  @Input() positionsList$: Observable<Position[]>;

  constructor() { }

  ngOnInit() {
    
  }

}
