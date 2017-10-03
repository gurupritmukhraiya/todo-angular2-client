import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task';
@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Output() onRemove = new EventEmitter<string>();

    remove() {
        this.onRemove.emit(this.task.id);
    }
}
