import { Component, OnInit, Input } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { interval } from 'rxjs/observable/interval';
import { filter, map, concat } from 'rxjs/operators';

import { Position } from '../position.model';
import { Task } from '../tasks.model';
import { TaskList } from '../task-list.model';

@Component({
  selector: 'app-task-list',
  template: `
  <div class="tasksContainer">
    <span [hidden]="taskList">No pending tasks</span>
    <ul *ngIf="taskList">
      <li [class.taskDone]="task.done" *ngFor="let task of taskList">
        <p-checkbox name="taskDone" value="true" [(ngModel)]="task.done" binary="true" (onChange)="updated = true;"></p-checkbox> {{ task.item }}
      </li>
      <!-- <li [hidden]="!newTask"><p-checkbox name="taskDone" value="true" binary="true"></p-checkbox> {{ newTask }}</li> -->
    </ul>
    <div class="newTask">
      <input type="text" name="newTask" pInputText placeholder="Add a new task" [(ngModel)]="newTask"/>
      <button pButton label="Add" class="ui-button-secondary" (click)="addNewTask(newTask)"></button>
    </div>
    <span class="saveBtnContainer" [hidden]="!updated">
      <button label="Save" pButton class="ui-button-success" (click)="saveUpdatedTasks()"></button>
    </span>
  </div>
  `,
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input('position') position: Position;
  taskList: TaskList[];
  taskDone: string[];
  newTask: string;
  updated: boolean = false;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService.getTaskList(this.position.id)
      .subscribe(tl => this.taskList = tl);
  }

  addNewTask(task){
    let newTask:TaskList = {
      "item": task,
      "done": false
    };

    if(this.taskList && this.taskList.length > 0){
      this.taskList = [...this.taskList, newTask];
    } else {
      this.taskList = [newTask];
    }

    this.newTask = '';
    this.updated = true;
  }

  saveUpdatedTasks() {
    this.updated = false;
  }

}
