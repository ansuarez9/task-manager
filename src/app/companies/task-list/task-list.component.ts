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
  <div class="tasksContainer">
    <span [hidden]="taskList$ | async">No pending tasks</span>
    <ul *ngIf="taskList$">
      <li [class.taskDone]="task.done" *ngFor="let task of taskList$ | async">
        <p-checkbox name="taskDone" value="true" [(ngModel)]="task.done" binary="true"></p-checkbox> {{ task.item }}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('position') position: Position;
  taskList$: Observable<TaskList[]>;
  taskDone: string[];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.taskList$ = this.companiesService.getTaskList(this.position.id);
  }

}
