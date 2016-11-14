import {Injectable, OnInit} from '@angular/core';
import {BugOperstaionService} from './BugOperation'

@Injectable()
export class BugStorage {
    bugOperation: BugOperstaionService;
    constructor(bugOperation : BugOperstaionService){
        this.bugOperation = bugOperation;
    }
    currentId  : number = 0;
    
    getAll(){
        let list = [];
        for(let i =0; i < window.localStorage.length; i++){
            let key = window.localStorage.key(i);
            let dataAsString = window.localStorage.getItem(key);
            let bug = JSON.parse(dataAsString);
            list.push(bug);
            this.currentId = this.currentId > bug.id ? this.currentId : bug.id;
        } 
        return list;
    }
    addNew(bugName){
        var newBug = this.bugOperation.addNewBug(bugName,++this.currentId);
        window.localStorage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }
    toggle(bug){
        this.bugOperation.toggleBug(bug);
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
    }

    remove(bug){
        window.localStorage.removeItem(bug.id.toString());
    }
}
