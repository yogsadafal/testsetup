import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Bug} from './Bug';

@Component({
    selector: 'bug-item',
    template: `<span (click)="toggleBug(bug)" [ngClass]="{closed: data.isClosed}" class="bugname">{{data.name|trimText:3}}</span>
                    <div class="datetime">{{data.createdAt |myDate}}</div>`
})
export class BugComponent {
    @Input()
    data:Bug;
    
    @Output()
    toggleBugEvent : EventEmitter<Bug> = new EventEmitter<Bug>();

    toggleBug(){
        this.toggleBugEvent.emit(this.data);
    }
}