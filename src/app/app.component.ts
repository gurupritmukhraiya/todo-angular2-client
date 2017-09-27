import { Component } from '@angular/core';
import { Task } from './task/task'

@Component({
  selector: 'to-do',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: string;
  title: string;
  tasks: Task[];

  constructor() {
    this.title = 'This is my todo list for testing purpose';
    this.tasks = [
      new Task("1", "This is first Task", "PENDING"),
      new Task("2", "This is second Task", "PENDING"),
      new Task("3", "This is third Task", "COMPLETED")
    ];
  }

  addTask(): void {
    this.tasks.unshift(new Task("4", "This is new Task", "PENDING"));
  }

  onRemove(taskId: string): void {
    this.tasks = this.tasks.filter(task => taskId != task.id);
  }
}
