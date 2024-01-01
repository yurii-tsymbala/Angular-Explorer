import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newTask: string = '';
  tasks: Task[] = [];
  constructor() {
    this.tasks = this.fetchTasks();
  }

  onChange() {
    console.log(this.newTask);
  }

  onCreate() {
    this.tasks.push(new Task(this.newTask));
    this.newTask = '';
  }

  fetchTasks(): Task[] {
    return [
      new Task('buy a car'),
      new Task('prepare the food'),
      new Task('build a house'),
    ];
  }
}
