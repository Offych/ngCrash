import { Component, OnInit } from '@angular/core';
import {Task} from "../../task.model";
import {TaskService} from "../../services/task.service";
/*import { TASKS } from "../../mock-tasks";
import { Task } from "../../task.model";*/

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  //tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => {
      this.tasks = this.tasks.filter((item) => item.id !== task.id)
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task)
    });
    console.log(task)
  }
}
