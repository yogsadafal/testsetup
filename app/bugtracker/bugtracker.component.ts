import { Component, OnInit } from '@angular/core';
import {Bug } from './bug';
import {BugStorage} from '../services/BugStorage';

@Component({
    selector: 'bugtracker',
    templateUrl: '/app/bugtracker/bugtracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugs: Array<Bug>=[];
    bugStorage : BugStorage;
    constructor(bugStorage : BugStorage){
        this.bugStorage = bugStorage;
    }
     ngOnInit(){
        this.bugs = this.bugStorage.getAll();
    }
    addBug(txtBug:String){
        var newBug = this.bugStorage.addNew(txtBug);
        this.bugs.push(newBug);
    }
    onToggle(bug:Bug){
        this.bugStorage.toggle(bug);
    }

}