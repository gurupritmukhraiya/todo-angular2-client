import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task';
@Component({
    selector: 'task',
    template: `
        <div class="input-group">
            <span class="input-group-addon task-checkbox">
                <input type="checkbox" (change)="task.status = $event.target.checked ? 'COMPLETED' : 'PENDING'">
            </span>
            <input *ngIf="task.status == 'PENDING'" type="text" class="form-control task-text" [(ngModel)]="task.note">
            <input *ngIf="task.status == 'COMPLETED'" class="form-control task-text task-done-text" [(ngModel)]="task.note">
            <span class="input-group-btn">
            <button class="btn btn-light rounded-0" type="button" (click)="remove()">X</button>
            </span>
        </div>
    `,
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Output() onRemove = new EventEmitter<string>();

    remove() {
        this.onRemove.emit(this.task.id);
    }
}
