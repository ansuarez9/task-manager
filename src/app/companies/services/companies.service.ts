import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { filter, map, concatMap } from 'rxjs/operators';

import { Company } from '../company.model';

import { Position } from '../position.model';
import { Task } from '../tasks.model';
import { TaskList } from '../task-list.model';

const companiesUrl: string = 'http://localhost:3000/companies';
const positionsUrl: string = 'http://localhost:3000/positions';
const tasksUrl: string = 'http://localhost:3000/tasks';

@Injectable()
export class CompaniesService {

    constructor(private $http:HttpClient){

    }

    getCompanies():Observable<Company[]> {
        return this.$http.get(companiesUrl);
    }

    getPositions(id?:number):Observable<Position[]>{
        return this.$http.get(positionsUrl)
            .pipe(
                map((data:Position[]) => {
                    if(id){
                        return data.filter(position => {
                            return position.companyId === id;
                        })
                    } else {
                        return data;
                    }
                    
                })
        )
    }

    // getTaskList(id:number):Observable<Task[]>{
    //     return this.$http.get(tasksUrl)
    //         .pipe(
    //             map((tasks:Task[]) => {
    //                 return tasks.filter(task => task.positionId === id);
    //             })
    //         );
    // }

    getTaskList(id:number):Observable<TaskList[]>{
        return this.$http.get(tasksUrl)
            .pipe(
                concatMap((tasks:any) => {
                    return tasks.filter(task => task.positionId === id);
                }),
                map((data:any) => {
                    console.log(data.taskList);
                    return data.taskList;
                })
            );
    }
}