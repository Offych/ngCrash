import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../task.model";
import {faAsterisk, faBlender, faEnvelope, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task) {
    this.onDeleteTask.emit(task);
    //console.log(task)
  }
  onToggle(task) {
    this.onToggleReminder.emit(task);
  }
  onEdit(task) {
    this.onEditTask.emit(task);
  }

}
