import { Injectable } from '@angular/core';
import { TASKS } from "../mock-tasks";
import { Task } from "../task.model";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {

    //const tasks = of(TASKS);
    //return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }

  getTask(id: number): Observable<Task> {
    return this.getTasks()
      .pipe(
        map((tasks: Task[]) => tasks.find(task => task.id === id))
      )
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

}
