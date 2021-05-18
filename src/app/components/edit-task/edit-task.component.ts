import { Component, OnInit } from '@angular/core';
import {Task} from "../../task.model";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  text: string;
  day: string;
  reminder: boolean = false;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.taskService.getTask(id).subscribe(task => this.task = task)
      }
    )
  }
  updateTask(task) {
    this.taskService.updateTask(task).subscribe();
  }
}
