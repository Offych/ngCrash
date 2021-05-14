import { Component, OnInit } from '@angular/core';
import { TASKS } from "../../mock-tasks";
import { Task } from "../../task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
