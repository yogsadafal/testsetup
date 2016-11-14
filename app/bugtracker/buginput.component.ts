import { Component, Output, EventEmitter} from '@angular/core';
import {Bug } from './bug';


@Component({
    selector: 'bug-input',
    template: `<section class="new">
			<label for="">Bug :</label>
			<input #txtBug type="text" name="" id="">
			<input type="button" (click)="addBug(txtBug);" value="Add New">
		</section>`
})
export class BugInputComponent {

   @Output()
    onAddBug :EventEmitter<String>=new EventEmitter<String>();
    
    addBug(txtBug){
        
        this.onAddBug.emit(txtBug.value);
    }
    
}