import { Injectable } from '@angular/core';
import { Bug } from '../bugtracker/bug';
@Injectable()
export class BugOperstaionService {
    
    addNewBug(bugName,currentId){
        return {
            id : ++currentId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        
    }
    toggleBug(bug){
        bug.isClosed = !bug.isClosed;
    }
}