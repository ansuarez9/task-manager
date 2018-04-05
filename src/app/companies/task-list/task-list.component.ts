import { Component, OnInit, Input } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';

import { Position } from '../position.model';
import { Task } from '../tasks.model';
import { TaskList } from '../task-list.model';

@Component({
  selector: 'app-task-list',
  template: `
  <ul *ngIf="taskList$">
    <li *ngFor="let task of taskList$ | async">{{ task.item }}</li>
  </ul>
  `,
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('position') position: Position;
  taskList$: Observable<TaskList[]>;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.taskList$ = this.companiesService.getTaskList(this.position.id);
  }

}
