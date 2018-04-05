import { TaskList } from './task-list.model';

export interface Task {
    id : number,
    taskList: Array<TaskList>,
    positionId: number
}